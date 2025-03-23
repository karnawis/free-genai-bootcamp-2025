    // src/services/AIService.js
    /**
     * Service for handling AI-related functionality in the poetry game
     * Keeps AI logic separate from game state management
     */

    // AI API endpoint - change this to your actual endpoint
    const API_URL = import.meta.env.VITE_AI_API_URL || "/api/poetry";

    /**
     * Generates an AI response for a newly discovered poem section
     * @param {string} clickedSection - The ID of the clicked section
     * @param {Array} discoveredSections - Array of all discovered section IDs
     * @param {Object} poemFragments - Object mapping section IDs to poem fragments
     * @returns {Promise<string>} - The AI response text
     */
export const generateSectionResponse = async (clickedSection, discoveredSections, poemFragments) => {
    try {
        const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            action: 'generate-response',
            clickContext: clickedSection,
            discoveredFragments: discoveredSections,
            poemSections: poemFragments
        })
        });
        
        if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.response;
    } catch (err) {
        console.error("Error fetching AI response:", err);
        throw err;
    }
    };

    /**
     * Generates a complete poem based on all discovered fragments
     * @param {Array} allSections - Array of all discovered section IDs
     * @param {Object} poemFragments - Object mapping section IDs to poem fragments
     * @returns {Promise<string>} - The complete poem text
     */
    export const generateCompletePoem = async (allSections, poemFragments) => {
    try {
        const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            action: 'complete-poem',
            discoveredFragments: allSections,
            poemSections: poemFragments
        })
        });
        
        if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.poem;
    } catch (err) {
        console.error("Error generating complete poem:", err);
        throw err;
    }
    };

    /**
     * Mock AI response generator for development/testing without API
     * @param {string} clickedSection - The ID of the clicked section
     * @param {Array} discoveredSections - Array of all discovered section IDs
     * @returns {Promise<string>} - A mock AI response
     */
    export const generateMockResponse = async (clickedSection, discoveredSections) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const totalSections = 5; // Adjust this based on your game
    const remainingSections = totalSections - discoveredSections.length;
    
    if (discoveredSections.length === 1) {
        return `You've uncovered the first fragment about the ${clickedSection}! What other pieces of this poetic puzzle await?`;
    } else if (remainingSections === 0) {
        return `The ${clickedSection} completes the collection! Now the full poem can emerge from these fragments.`;
    } else {
        return `The ${clickedSection} reveals another layer of meaning. ${remainingSections} more ${remainingSections === 1 ? 'piece' : 'pieces'} remain hidden.`;
    }
    };

    /**
     * Generate a mock complete poem for development/testing
     * @param {Object} poemFragments - Object mapping section IDs to poem fragments
     * @returns {Promise<string>} - A mock complete poem
     */
    export const generateMockPoem = async (poemFragments) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Combine existing fragments with a mock conclusion
    const fragments = Object.values(poemFragments);
    const existingPoem = fragments.join("\n");
    
    return `${existingPoem}

    The story comes full circle now,
    As disparate threads together bow.
    A tapestry of words and light,
    Revealing truth that shines so bright.`;
    };

    export default {
    generateSectionResponse,
    generateCompletePoem,
    generateMockResponse,
    generateMockPoem
};