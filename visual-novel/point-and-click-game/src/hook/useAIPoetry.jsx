    import { useContext, useEffect, useState } from "react";
    import { GameContext } from "../components/GameProvider";
    import { useAI } from "../AIProvider";

    /**
     * Custom hook to connect the game state with AI poetry generation
     * Tracks discovered scenes and maintains poem fragments
     */
    const useAIPoetry = () => {
    const { trackedScenes } = useContext(GameContext);
    const { getElementResponse, generatePoem } = useAI();
    
    // Store the last processed scene to avoid duplicate processing
    const [lastProcessedScene, setLastProcessedScene] = useState(null);
    
    // Define poem fragments linked to scene keys
    // Replace these with your actual poem fragments mapped to scene keys
    const [poemFragments] = useState({
        s1: "In the depths where shadows play,",
        s2: "Ancient secrets come to light,",
        s3: "Whispers echo through the halls,",
        s4: "Mysteries unfold with night,",
        s5: "Forgotten tales seek the day."
    });
    
    // Process new scene discoveries
    useEffect(() => {
        // Get the most recently added scene (if any)
        const currentScene = trackedScenes.length > 0 ? trackedScenes[trackedScenes.length - 1] : null;
        
        // Skip if there's no scene or it's the same as last processed
        if (!currentScene || currentScene === lastProcessedScene) {
        return;
        }
        
        // Check if this scene has a poem fragment
        if (poemFragments[currentScene]) {
        // Get AI response for this scene
        const discoveredScenes = trackedScenes.filter(scene => poemFragments[scene]);
        getElementResponse(currentScene, discoveredScenes, poemFragments);
        
        // Update last processed scene
        setLastProcessedScene(currentScene);
        
        // Check if all fragments have been found
        const totalFragments = Object.keys(poemFragments).length;
        const discoveredFragments = discoveredScenes.length;
        
        if (discoveredFragments === totalFragments) {
            // Generate the complete poem
            generatePoem(discoveredScenes, poemFragments);
        }
        }
    }, [trackedScenes, lastProcessedScene, poemFragments, getElementResponse, generatePoem]);
    
    // Return data that might be useful to components
    return {
        discoveredFragments: trackedScenes.filter(scene => poemFragments[scene]),
        totalFragments: Object.keys(poemFragments).length,
        poemFragments
    };
    };

    export default useAIPoetry;