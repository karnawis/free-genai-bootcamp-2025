# GenAI Language Learning Platform: Conceptual Overview

## Architecture Summary

The GenAI language learning platform integrates AI-powered study activities with a comprehensive vocabulary database to create an effective language learning environment.

## Key Components

### User Interface
- **Lang Portal**: Central access point for all platform features
- **Word Groups**: Curated vocabulary sets for targeted learning
- **Session Management**: Structured learning path tracking

### Core Infrastructure
- **Core 2000 Words Database**: Foundation of essential vocabulary

### Study Activities
- **Writing Practice App**: Skill-building writing exercises
- **Text Adventure Game**: Interactive storytelling for immersion
- **Visual Novel Reading**: Engaging contextual learning
- **Visual Flashcard Vocab**: Visual reinforcement of vocabulary
- **Speak to Learn**: Pronunciation and speaking practice
- **Sentence Constructor**: AI-assisted sentence formation

### AI Components (Sentence Constructor)
- **Vector Database**: Efficient storage of vocabulary embeddings
- **RAG System**: Retrieval-Augmented Generation for context
- **Prompt Cache**: Performance optimization for common queries
- **LLM 7B**: Language processing and generation
- **GuardRails**: Input/output filtering for quality control

## Data Flow

1. Students interact with the Lang Portal to access vocabulary and learning activities
2. The Core 2000 Words Database feeds relevant content to all study activities
3. The Sentence Constructor leverages AI components for intelligent language assistance:
   - User input → Vector Database → RAG → LLM → GuardRails → User output
   - Prompt Cache accelerates common queries

This architecture balances comprehensive language learning resources with efficient AI-powered assistance to create an effective learning environment.