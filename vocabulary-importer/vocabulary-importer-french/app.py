import streamlit as st
import json
import pandas as pd
import pyperclip
import os
from dotenv import load_dotenv
from anthropic import Anthropic

# Load environment variables
load_dotenv()

# Initialize Anthropic client
anthropic_api_key = os.getenv("ANTHROPIC_API_KEY")
if not anthropic_api_key:
    st.error("⚠️ ANTHROPIC_API_KEY not found in environment variables. Please set it in .env file.")
    anthropic = None
else:
    anthropic = Anthropic(api_key=anthropic_api_key)

# Page configuration
st.set_page_config(
    page_title="Vocabulary Importer Tool",
    page_icon="📚",
    layout="wide"
)

# App title and description
st.title("📚 Language Vocabulary Importer")
st.markdown("""
Generate vocabulary lists based on thematic categories for language learning applications.
Simply specify a category, and the AI will create structured vocabulary data ready for import.
""")

# Function to generate vocabulary using Claude
def generate_vocabulary(category, source_lang, target_lang, count, include_details):
    if not anthropic:
        return None, "Anthropic API key not configured"
    
    try:
        # Construct prompt for Claude
        prompt = f"""Generate a vocabulary list for language learning based on the thematic category: "{category}".

Details:
- Source language: {source_lang}
- Target language: {target_lang}
- Number of vocabulary items: {count}
- Include detailed information: {include_details}

Return ONLY a valid JSON array with this exact structure:
[
  {{
    "{source_lang.lower()}": "word in {source_lang}",
    "{target_lang.lower()}": "word in {target_lang}",
    "pronunciation": "phonetic pronunciation of {target_lang} word",
    "parts": {{"type": "part of speech", "usage": "formal/informal/context"}},
    "correctCount": 0,
    "wrongCount": 0
  }}
]

Ensure the JSON is properly formatted. Do not include any explanations, just the JSON.
"""

        # Call Anthropic API
        response = anthropic.messages.create(
            model="claude-3-sonnet-20240229",
            max_tokens=4000,
            temperature=0.2,
            system="You are a language vocabulary generator that outputs only valid JSON with no additional text.",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        
        # Extract content and parse JSON
        content = response.content[0].text
        # Remove markdown code blocks if present
        content = content.replace("```json", "").replace("```", "").strip()
        
        vocabulary = json.loads(content)
        return vocabulary, None
    except json.JSONDecodeError as e:
        return None, f"Error parsing JSON response: {str(e)}"
    except Exception as e:
        return None, f"Error generating vocabulary: {str(e)}"

# Sidebar configuration
with st.sidebar:
    st.header("Configuration")
    
    source_language = st.selectbox(
        "Source Language",
        options=["English", "French", "Spanish", "German", "Italian", "Portuguese", "Chinese", "Japanese"],
        index=0
    )
    
    target_language = st.selectbox(
        "Target Language",
        options=["French", "English", "Spanish", "German", "Italian", "Portuguese", "Chinese", "Japanese"],
        index=0
    )
    
    if source_language == target_language:
        st.warning("⚠️ Source and target languages should be different")
    
    vocab_size = st.slider("Number of vocabulary items", min_value=5, max_value=30, value=10, step=5)
    
    include_details = st.checkbox("Include detailed grammatical info", value=True)
    
    st.divider()
    st.caption("Developed for internal content team use")

# Main app content
tabs = st.tabs(["Generate Vocabulary", "Import Vocabulary"])

# Generate tab
with tabs[0]:
    col1, col2 = st.columns([3, 1])
    
    with col1:
        category = st.text_input(
            "Enter a thematic category",
            placeholder="e.g., Food and dining, Travel, Business meeting, Family relations",
            help="Specify a theme for the vocabulary. Be specific for better results."
        )
    
    with col2:
        st.write("")
        st.write("")
        generate_button = st.button("Generate Vocabulary", type="primary", use_container_width=True)
    
    # Generate vocabulary
    if generate_button and category:
        if source_language == target_language:
            st.error("Source and target languages must be different")
        else:
            with st.spinner(f"Generating {vocab_size} vocabulary items for '{category}'..."):
                vocabulary, error = generate_vocabulary(
                    category,
                    source_language,
                    target_language,
                    vocab_size,
                    include_details
                )
                
                if error:
                    st.error(error)
                elif vocabulary:
                    st.success(f"✅ Successfully generated {len(vocabulary)} vocabulary items")
                    
                    # Display as table
                    df = pd.json_normalize(vocabulary)
                    st.dataframe(df, use_container_width=True)
                    
                    # Format JSON for display and download
                    json_str = json.dumps(vocabulary, indent=2, ensure_ascii=False)
                    
                    # Show JSON
                    st.subheader("JSON Output")
                    st.code(json_str, language="json")
                    
                    # Create copy and download buttons
                    col1, col2 = st.columns(2)
                    with col1:
                        if st.button("📋 Copy to Clipboard", use_container_width=True):
                            pyperclip.copy(json_str)
                            st.toast("Copied to clipboard!", icon="✅")
                    
                    with col2:
                        filename = f"{category.lower().replace(' ', '_')}_{target_language.lower()}.json"
                        st.download_button(
                            "💾 Download JSON",
                            data=json_str,
                            file_name=filename,
                            mime="application/json",
                            use_container_width=True
                        )

# Import tab
with tabs[1]:
    st.subheader("Import Existing Vocabulary")
    st.markdown("Import vocabulary from JSON to view, edit, or export it.")
    
    # File uploader and text area
    col1, col2 = st.columns([1, 1])
    
    with col1:
        uploaded_file = st.file_uploader("Upload JSON file", type=["json"])
    
    with col2:
        json_text = st.text_area("Or paste JSON here:", height=150)
    
    import_button = st.button("Import Vocabulary", type="primary")
    
    # Process import
    if import_button:
        try:
            if uploaded_file:
                vocabulary = json.load(uploaded_file)
            elif json_text:
                vocabulary = json.loads(json_text)
            else:
                st.warning("Please upload a file or paste JSON to import")
                st.stop()
            
            # Display imported data
            st.success(f"Imported {len(vocabulary)} vocabulary items")
            
            # Display as table
            df = pd.json_normalize(vocabulary)
            st.dataframe(df, use_container_width=True)
            
            # Format and display JSON
            json_str = json.dumps(vocabulary, indent=2, ensure_ascii=False)
            st.subheader("JSON Output")
            st.code(json_str, language="json")
            
            # Add copy button
            if st.button("📋 Copy to Clipboard", key="import_copy"):
                pyperclip.copy(json_str)
                st.toast("Copied to clipboard!", icon="✅")
                
        except json.JSONDecodeError:
            st.error("Invalid JSON format. Please check your input.")
        except Exception as e:
            st.error(f"Error importing vocabulary: {str(e)}")

# Footer
st.divider()
st.caption("Internal vocabulary generation tool for language learning application")
