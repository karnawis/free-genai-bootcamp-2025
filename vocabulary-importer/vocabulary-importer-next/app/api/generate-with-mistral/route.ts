import { NextResponse } from "next/server"

// Mistral API endpoint
const MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions"

export async function POST(request: Request) {
  try {
    const { theme } = await request.json()

    if (!theme) {
      return NextResponse.json({ error: "Theme is required" }, { status: 400 })
    }

    // For Mistral, we need to use a different API key
    // This is a placeholder - users will need to provide their own Mistral API key
    const apiKey = process.env.MISTRAL_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: "Mistral API key is not configured. Please add MISTRAL_API_KEY to your environment variables." },
        { status: 500 },
      )
    }

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

    // Direct API call to Mistral
    const response = await fetch(MISTRAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mistral-large-latest",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful language assistant that generates vocabulary lists in structured JSON format. Only return valid JSON without any additional text or explanations.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Mistral API error:", errorData)
      return NextResponse.json(
        { error: `Mistral API error: ${errorData.error?.message || "Unknown error"}` },
        { status: response.status },
      )
    }

    const data = await response.json()
    const text = data.choices[0].message.content

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
    return NextResponse.json({ error: "Failed to generate vocabulary" }, { status: 500 })
  }
}

