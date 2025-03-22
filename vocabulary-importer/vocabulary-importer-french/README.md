# French Vocabulary Importer

A Streamlit-based tool for generating French vocabulary from English words or phrases using Anthropic/Mistral AI. This app helps create structured vocabulary lists with French translations, pronounciation and parts.

## expectations

- Generate French vocabulary from English input using Anthropic/Mistral AI
- Export vocabulary to JSON format
- Import existing vocabulary from JSON files
- User-friendly Streamlit interface
- Support for both single words and phrases

3. Generate vocabulary

### Installation

Create a virtual environment:

```py
python -m venv venv
```

mac

```
source venv/bin/activate
```

windows

```
venv\Scripts\activate
```

install dependencies

```
pip install -r requirements.txt
```

Create a `.env` file with your Anthropic API key:

```
ANTHROPIC_API_KEY=your_key_here
```

Start the application app:

```bash
streamlit run vocab_importer.py
```

Open your browser and navigate to the URL shown in the terminal (typically http://localhost:8080)

### Import Vocabulary

1. Upload a JSON file containing vocabulary data
2. Review the imported vocabulary
3. Export modified vocabulary if needed

## Example Usage

### Example 1: Single Word

Input:

```
cat
```

Expected output:

```json
{
  "vocabulary": [
    {
      "french": "chat",
      "pronunciation": "/ʃa/",
      "english": "cat",
      "parts": {
        "type": "noun",
        "gender": "masculine"
      }
    }
  ]
}
```

### Example 2: Phrase

Input:

```
good morning
```

Expected output:

```json
{
  "vocabulary": [
    {
      "french": "bonjour",
      "pronunciation": "/bɔ̃.ʒuʁ/",
      "english": "good morning",
      "parts": {
        "type": "greeting",
        "usage": "formal/informal"
      }
    }
  ]
}
```

## JSON Format

The tool expects and generates JSON in the following format:

```json
{
  "vocabulary": [
    {
      "french": "French word",
      "pronunciation": "IPA pronunciation",
      "english": "English meaning",
      "parts": {
        "type": "part of speech",
        "gender": "masculine/feminine",
        "usage": "usage context"
      }
    }
  ]
}
```
