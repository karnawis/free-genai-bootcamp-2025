# AI Poetry Integration Guide

This guide walks you through integrating the AI poetry system with your existing point-and-click game.

## Components Overview

The AI system consists of several separate components:

1. **AIProvider**: The core context provider that manages AI state and communications
2. **AIPoetryDisplay**: A component to display AI responses and poems
3. **useAIPoetry**: A hook to connect your game's scene tracking with the AI system
4. **AIDevToggle**: A development-only component for testing without the API

## Integration Steps

### 1. Add New Files to Your Project

Place these files in your project structure:

- `src/AIProvider.jsx` - The main AI context provider
- `src/components/AIPoetryDisplay.jsx` - Component to show AI responses
- `src/hooks/useAIPoetry.jsx` - Hook to connect your game state with AI
- `src/components/AIDevToggle.jsx` - Development tools (optional)

### 2. Update App.jsx

Wrap your existing GameProvider with the new AIProvider:

```jsx
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import GameMain from "./components/layout/GameMain";
import GameWrapper from "./components/layout/GameWrapper";
import { GameProvider } from "./components/GameProvider";
import AIProvider from "./AIProvider";
import AIPoetryDisplay from "./components/AIPoetryDisplay";

function App() {
  return (
    <div>
      <GameProvider>
        <AIProvider>
          <GameWrapper>
            <Header />
            <GameMain />
            <AIPoetryDisplay className="game-ai-poetry" />
            <Footer />
          </GameWrapper>
        </AIProvider>
      </GameProvider>
    </div>
  );
}

export default App;
```

### 3. Add the Hook to Your Game

In an appropriate component (such as GameMain or a scene component), add the useAIPoetry hook:

```jsx
import useAIPoetry from "../hooks/useAIPoetry";

const GameMain = () => {
  // Your existing code

  // Add the AI poetry hook
  const { discoveredFragments, totalFragments } = useAIPoetry();

  // Rest of your component
};
```

### 4. Customize Poem Fragments

Update the poem fragments in `useAIPoetry.jsx` to match your game's scenes:

```javascript
// Define poem fragments linked to scene keys
const [poemFragments] = useState({
  s1: "Your first poem fragment here",
  s2: "Your second poem fragment here",
  // Add all your scenes that should reveal poem fragments
});
```

### 5. Add CSS Styles

Add the CSS styles to your project's CSS file.

### 6. Set Up the Backend (if using real AI)

Follow these steps to set up the Express backend:

1. Create a `server` directory in your project root
2. Add the Express server implementation there
3. Set up your environment variables in `.env` files

### 7. Configure Environment Variables

Create a `.env.local` file in your project root:

```
VITE_AI_API_URL=http://localhost:3001/api/poetry
```

For production, you'll set this to your actual API endpoint.

## Testing the Integration

1. Start your Vite development server
2. If using real AI, also start the Express server
3. Navigate through your game and verify:
   - AI responses appear when discovering new scenes with poem fragments
   - The complete poem is generated when all fragments are found

## Using Development Mode

During development, you can use the AIDevToggle to switch between real API calls and mock responses:

```jsx
import AIDevToggle from "./components/AIDevToggle";

// Inside your component's return:
<div className="footer">
  <Footer />
  <AIDevToggle />
</div>;
```

This toggle only appears in development mode and will be hidden in production builds.

## Customization Options

### Styling

You can customize the appearance by modifying the CSS classes in your stylesheets.

### AI Response Format

To change how the AI responds, you can:

1. Modify the backend server's prompt templates
2. Adjust the mock responses in the AIProvider

### Integration with Existing Features

The AI system is designed to work alongside your existing game features without interfering. You can:

- Show/hide the poetry display based on game state
- Trigger AI responses at specific game moments
- Save/restore AI state as part of game saves

## Troubleshooting

- **Missing AI Responses**: Check that your scene keys in useAIPoetry match those in your game's trackedScenes
- **API Connection Issues**: Verify the backend server is running and the environment variable is set correctly
- **Component Not Appearing**: Make sure the AIPoetryDisplay component is placed within both providers
