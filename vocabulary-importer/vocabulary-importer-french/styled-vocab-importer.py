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

# Custom CSS
def load_css():
    st.markdown("""
    <style>
        /* Main theme colors */
        :root {
            --primary-color: #4F6D7A;
            --secondary-color: #86BBD8;
            --accent-color: #F26419;
            --background-color: #F6F8FA;
            --text-color: #333333;
        }
        
        /* Page background */
        .stApp {
            background-color: var(--background-color);
        }
        
        /* Headers */
        h1, h2, h3 {
            color: var(--primary-color);
            font-family: 'Helvetica Neue', sans-serif;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--secondary-color);
        }
        
        h2 {
            font-size: 1.8rem;
            margin-top: 2rem;
        }
        
        /* Custom cards */
        .card {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }
        
        /* Custom buttons */
        .custom-button {
            background-color: var(--accent-color);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s;
            display: inline-block;
            text-align: center;
            margin: 10px 0;
            width: 100%;
        }
        
        .custom-button:hover {
            background-color: #E05A0C;
        }
        
        /* Form inputs */
        .custom-input {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 15px;
            width: 100%;
        }
        
        /* Sidebar styling */
        .css-1d391kg {
            background-color: #E9ECF0;
        }
        
        /* Tab styling */
        .stTabs [data-baseweb="tab-list"] {
            gap: 2px;
            background-color: #E9ECF0;
        }
        
        .stTabs [data-baseweb="tab"] {
            background-color: #D1D8E0;
            border-radius: 4px 4px 0 0;
            padding: 10px 20px;
            border: none;
        }
        
        .stTabs [aria-selected="true"] {
            background-color: white;
            font-weight: bold;
        }
        
        /* Footer */
        .footer {
            margin-top: 40px;
            text-align: center;
            color: #888;
            font-size: 0.8rem;
            padding: 20px;
            border-top: 1px solid #ddd;
        }
        
        /* Vocabulary card */
        .vocab-card {
            background-color: white;
            border-left: 4px solid var(--accent-color);
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .vocab-french {
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--primary-color);
        }
        
        .vocab-english {
            color: #666;
            font-style: italic;
        }
        
        .vocab-pronunciation {
            font-family: monospace;
            background-color: #f5f5f5;
            padding: 2px 5px;
            border-radius: 3px;
            font-size: 0.9rem;
        }
        
        .vocab-parts {
            margin-top: 5px;
            font-size: 0.9rem;
            color: #777;
        }
        
        /* JSON code display */
        pre {
            background-color: #272822;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        
        code {
            font-family: 'Courier New', Courier, monospace;
        }
        
        /* Logo/Header */
        .logo-header {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .logo-text {
            font-size: 2.2rem;
            font-weight: bold;
            margin-left: 15px;
            background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
    """, unsafe_allow_html=True)

# Page configuration
st.set_page_config(
    page_title="French Vocabulary Importer",
    page_icon="🇫🇷",
    layout="wide"
)

# Load custom CSS
load_css()

# App header with custom HTML
st.markdown("""
<div class="logo-header">
    <div class="logo-text">French Vocabulary Importer</div>
</div>
<div class="card">
    <p>Generate French vocabulary from English words or phrases using AI. 
    This tool helps create structured vocabulary lists with translations, pronunciations, and grammatical details.</p>
</div>
""", unsafe_allow_html=True)

# Function to generate vocabulary using Claude
def generate_vocabulary(text_input, include_details=True):
    if not anthropic:
        return None, "Anthropic API key not configured"
    
    try:
        # Construct prompt for Claude
        prompt = f"""Generate French vocabulary for the following English {"words" if "," in text_input else "word or phrase"}: "{text_input}".

Please provide a detailed response with the following information for each word/phrase:
1. The French translation
2. The IPA pronunciation
3. Parts of speech information (noun, verb, adjective, etc.)
4. Gender for nouns (masculine/feminine)
5. Usage context (formal/informal, regional variations if any)

Format your response as valid JSON matching this exact structure:
{{
  "vocabulary": [
    {{
      "french": "French word",
      "pronunciation": "IPA pronunciation",
      "english": "English meaning",
      "parts": {{
        "type": "part of speech",
        "gender": "masculine/feminine for nouns",
        "usage": "usage context"
      }}
    }}
  ]
}}

The JSON must be properly formatted with no syntax errors. Only provide the JSON with no additional text or explanations.
"""

        # Call Anthropic API
        response = anthropic.messages.create(
            model="claude-3-sonnet-20240229",
            max_tokens=4000,
            temperature=0.2,
            system="You are a French language expert that outputs only valid JSON with no additional text.",
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

# Sidebar with custom HTML
with st.sidebar:
    st.markdown('<h2>Configuration</h2>', unsafe_allow_html=True)
    
    st.markdown('<div class="card">', unsafe_allow_html=True)
    include_details = st.checkbox("Include detailed grammatical info", value=True)
    
    st.markdown("""
    <h3>Input Format</h3>
    <p>You can enter:</p>
    <ul>
        <li>A single word: <code>cat</code></li>
        <li>A phrase: <code>good morning</code></li>
        <li>Multiple words separated by commas: <code>cat, dog, house</code></li>
    </ul>
    </div>
    """, unsafe_allow_html=True)
    
    st.markdown('<div class="card">', unsafe_allow_html=True)
    st.markdown("<h3>About</h3>", unsafe_allow_html=True)
    st.markdown("""
    <p>This tool uses Anthropic's Claude to generate accurate French translations and linguistic details.</p>
    <p>Built with Streamlit and enhanced with custom HTML/CSS.</p>
    </div>
    """, unsafe_allow_html=True)

# Main app content with custom HTML/CSS
tabs = st.tabs(["Generate Vocabulary", "Import Vocabulary"])

# Generate tab
with tabs[0]:
    st.markdown('<div class="card">', unsafe_allow_html=True)
    st.markdown("<h2>Generate French Vocabulary</h2>", unsafe_allow_html=True)
    
    text_input = st.text_area(
        "Enter English words or phrases",
        placeholder="e.g., cat\nor: good morning\nor: cat, dog, house",
        help="Enter a single word, phrase, or multiple words separated by commas",
        height=100
    )
    
    generate_button = st.button("Generate Vocabulary", type="primary", use_container_width=True)
    st.markdown('</div>', unsafe_allow_html=True)
    
    # Generate vocabulary
    if generate_button and text_input:
        with st.spinner("Generating French vocabulary..."):
            vocabulary, error = generate_vocabulary(text_input, include_details)
                
            if error:
                st.error(error)
            elif vocabulary and "vocabulary" in vocabulary:
                st.success(f"✅ Successfully generated {len(vocabulary['vocabulary'])} vocabulary items")
                
                # Display custom vocabulary cards
                for item in vocabulary["vocabulary"]:
                    st.markdown(f"""
                    <div class="vocab-card">
                        <div class="vocab-french">{item['french']}</div>
                        <div class="vocab-pronunciation">{item['pronunciation']}</div>
                        <div class="vocab-english">{item['english']}</div>
                        <div class="vocab-parts">
                            <strong>Type:</strong> {item['parts'].get('type', 'N/A')}
                            {f"<strong>Gender:</strong> {item['parts'].get('gender', 'N/A')}" if 'gender' in item['parts'] else ''}
                            {f"<strong>Usage:</strong> {item['parts'].get('usage', 'N/A')}" if 'usage' in item['parts'] else ''}
                        </div>
                    </div>
                    """, unsafe_allow_html=True)
                
                # Format JSON for display and download
                json_str = json.dumps(vocabulary, indent=2, ensure_ascii=False)
                
                # Show JSON
                st.markdown("<h3>JSON Output</h3>", unsafe_allow_html=True)
                st.code(json_str, language="json")
                
                # Create an input field with the JSON for easy copying
                st.text_area("Copy JSON from here:", value=json_str, height=150)
                
                # Create copy and download buttons with custom HTML
                col1, col2 = st.columns(2)
                with col1:
                    if st.button("📋 Copy to Clipboard", use_container_width=True):
                        pyperclip.copy(json_str)
                        st.toast("Copied to clipboard!", icon="✅")
                
                with col2:
                    filename = f"french_vocabulary_{text_input.replace(' ', '_').replace(',', '_')[:30]}.json"
                    st.download_button(
                        "💾 Download JSON",
                        data=json_str,
                        file_name=filename,
                        mime="application/json",
                        use_container_width=True
                    )

# Import tab
with tabs[1]:
    st.markdown('<div class="card">', unsafe_allow_html=True)
    st.markdown("<h2>Import Existing Vocabulary</h2>", unsafe_allow_html=True)
    st.markdown("<p>Import vocabulary from JSON to view, edit, or export it.</p>", unsafe_allow_html=True)
    
    # File uploader and text area
    col1, col2 = st.columns(2)
    
    with col1:
        uploaded_file = st.file_uploader("Upload JSON file", type=["json"])
    
    with col2:
        json_text = st.text_area("Or paste JSON here:", height=150)
    
    import_button = st.button("Import Vocabulary", type="primary")
    st.markdown('</div>', unsafe_allow_html=True)
    
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
            
            # Check if vocabulary has the expected structure
            if "vocabulary" not in vocabulary:
                vocabulary = {"vocabulary": vocabulary}
            
            # Display imported data
            st.success(f"Imported {len(vocabulary['vocabulary'])} vocabulary items")
            
            # Display custom vocabulary cards
            for item in vocabulary["vocabulary"]:
                st.markdown(f"""
                <div class="vocab-card">
                    <div class="vocab-french">{item['french']}</div>
                    <div class="vocab-pronunciation">{item.get('pronunciation', 'N/A')}</div>
                    <div class="vocab-english">{item['english']}</div>
                    <div class="vocab-parts">
                        <strong>Type:</strong> {item.get('parts', {}).get('type', 'N/A')}
                        {f"<strong>Gender:</strong> {item.get('parts', {}).get('gender', 'N/A')}" if item.get('parts', {}).get('gender') else ''}
                        {f"<strong>Usage:</strong> {item.get('parts', {}).get('usage', 'N/A')}" if item.get('parts', {}).get('usage') else ''}
                    </div>
                </div>
                """, unsafe_allow_html=True)
            
            # Format and display JSON
            json_str = json.dumps(vocabulary, indent=2, ensure_ascii=False)
            st.markdown("<h3>JSON Output</h3>", unsafe_allow_html=True)
            st.code(json_str, language="json")
            
            # Create a text area for copying
            st.text_area("Copy JSON from here:", value=json_str, height=150)
            
            # Add copy button
            if st.button("📋 Copy to Clipboard", key="import_copy"):
                pyperclip.copy(json_str)
                st.toast("Copied to clipboard!", icon="✅")
                
        except json.JSONDecodeError:
            st.error("Invalid JSON format. Please check your input.")
        except Exception as e:
            st.error(f"Error importing vocabulary: {str(e)}")

# Custom footer
st.markdown("""
<div class="footer">
    <p>French Vocabulary Importer | Developed for language learning</p>
</div>
""", unsafe_allow_html=True)
