# French Learning Visual Novel Story Structure

## Core Framework

- Linear progression through scenes
- Each scene features one character with the player
- Key decision points that lead to specific branches
- All interactions flow naturally from one to the next

## NodeState

When a current dialog node is set it a state.

- speaker
- response

## Story Data Structure Example

This is an example of a story scene in JSON format that is stored in the outputs/scenes/ directory.

There's no narrator - work on flatten up the structure
Speaker is always the player or another character
There's always nextID for transitionign to the next scenes
Choicse are always from the perspective of the player

### Template

```json
{
  "id": "[SCENE_ID]",
  "title": "[SCENE_TITLE]",
  "location_id": "[LOCATION_ID]",
  "character_id": "[CHARACTER_ID]",
  "dialog": {
    "000": {
      "speaker": "[SPEAKER]",
      "french": "[FRENCH_TEXT]",
      "english": "[ENGLISH_TEXT]",
      "default_next_id": "001"
    },
    "001": {
      "speaker": "[CHARACTER_ID]",
      "french": "[FRENCH_TEXT]",
      "english": "[ENGLISH_TEXT]",
      "choices": [
        {
          "english": "[ENGLISH_CHOICE_1]",
          "french": "[FRENCH_CHOICE_1]",
          "next_id": "002"
        },
        {
          "english": "[ENGLISH_CHOICE_2]",
          "french": "[FRENCH_CHOICE_2]",
          "next_id": "003"
        }
      ]
    },
    "002": {
      "speaker": "[CHARACTER_ID]",
      "french": "[FRENCH_RESPONSE_TO_CHOICE_1]",
      "english": "[ENGLISH_RESPONSE_TO_CHOICE_1]",
      "default_next_id": "004"
    },
    "003": {
      "speaker": "[CHARACTER_ID]",
      "french": "[FRENCH_RESPONSE_TO_CHOICE_2]",
      "english": "[ENGLISH_RESPONSE_TO_CHOICE_2]",
      "default_next_id": "004"
    },
    "004": {
      "speaker": "[SPEAKER]",
      "french": "[FRENCH_TEXT]",
      "english": "[ENGLISH_TEXT]",
      "next_scene_id": "[NEXT_SCENE_ID]"
    }
  },
  "vocabulary": [
    {
      "word": "[FRENCH_WORD_1]",
      "translation": "[ENGLISH_TRANSLATION_1]"
    },
    {
      "word": "[FRENCH_WORD_2]",
      "translation": "[ENGLISH_TRANSLATION_2]"
    },
    {
      "word": "[FRENCH_WORD_3]",
      "translation": "[ENGLISH_TRANSLATION_3]"
    }
  ]
}
```

### Example of stoy structure
