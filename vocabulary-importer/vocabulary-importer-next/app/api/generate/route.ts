import { generateText } from "ai"
import { createAnthropic } from "@ai-sdk/anthropic"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { theme } = await request.json()

    if (!theme) {
      return NextResponse.json({ error: "Theme is required" }, { status: 400 })
    }

    // Check if API key is available
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      console.error("Anthropic API key is missing")
      return NextResponse.json(
        { error: "Anthropic API key is not configured. Please add it to your environment variables." },
        { status: 500 },
      )
    }

    // Create Anthropic instance with explicit API key
    const anthropic = createAnthropic({
      apiKey,
    })

    const prompt = `
      Generate a vocabulary list for the thematic category: "${theme}".
      The vocabulary should be in French with English translations and pronunciations.
      
      Return ONLY a valid JSON array with exactly 10 items in the following format:
      [
        {
          "french": "word in French",
          "pronunciation": "pronunciation guide",
          "english": "English translation"
        }
      ]
      
      Make sure the JSON is valid and properly formatted.
    `

    // Using Anthropic Claude 3 Sonnet with explicit configuration
    const { text } = await generateText({
      model: anthropic("claude-3-sonnet-20240229"),
      prompt,
      system:
        "You are a helpful language assistant that generates vocabulary lists in structured JSON format. Only return valid JSON without any additional text or explanations.",
    })

    // Parse the response to ensure it's valid JSON
    let vocabulary
    try {
      // Find JSON array in the response (in case there's any extra text)
      const jsonMatch = text.match(/\[[\s\S]*\]/)
      if (jsonMatch) {
        vocabulary = JSON.parse(jsonMatch[0])
      } else {
        vocabulary = JSON.parse(text)
      }
    } catch (error) {
      console.error("Error parsing LLM response:", error)
      return NextResponse.json({ error: "Failed to parse vocabulary data" }, { status: 500 })
    }

    return NextResponse.json({ vocabulary })
  } catch (error) {
    console.error("Error generating vocabulary:", error)

    // Check for specific Anthropic API key errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    if (errorMessage.includes("API key")) {
      return NextResponse.json(
        { error: "Invalid or missing Anthropic API key. Please check your API key and try again." },
        { status: 500 },
      )
    }

    return NextResponse.json({ error: "Failed to generate vocabulary" }, { status: 500 })
  }
}

