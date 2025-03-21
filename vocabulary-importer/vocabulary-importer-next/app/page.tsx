"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Copy, Check } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface VocabularyItem {
  french: string
  pronunciation: string
  english: string
}

export default function VocabularyImporter() {
  const [theme, setTheme] = useState("")
  const [result, setResult] = useState<VocabularyItem[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!theme.trim()) {
      toast({
        title: "Error",
        description: "Please enter a thematic category",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate vocabulary")
      }

      setResult(data.vocabulary)
    } catch (error) {
      console.error("Error generating vocabulary:", error)
      const errorMessage = error instanceof Error ? error.message : "Failed to generate vocabulary. Please try again."
      setError(errorMessage)
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = () => {
    const jsonString = JSON.stringify(result, null, 2)
    navigator.clipboard.writeText(jsonString)
    setCopied(true)
    toast({
      title: "Copied!",
      description: "Vocabulary copied to clipboard",
    })

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Vocabulary Language Importer</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Generate Vocabulary</CardTitle>
          <CardDescription>Enter a thematic category to generate vocabulary items</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Enter a thematic category (e.g., food, travel, business)"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="min-h-[100px]"
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Vocabulary"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error}
            {error.includes("API key") && (
              <p className="mt-2 text-sm">
                Make sure your Anthropic API key is properly configured in your environment variables.
              </p>
            )}
          </AlertDescription>
        </Alert>
      )}

      {result.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Generated Vocabulary</span>
              <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-1">
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-md overflow-auto max-h-[400px]">
              <pre className="text-sm">{JSON.stringify(result, null, 2)}</pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

