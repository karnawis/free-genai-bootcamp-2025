    import { useAI } from "../AIProvider";
    import PropTypes from "prop-types";

    /**
     * AI Poetry Display Component
     * Shows AI responses, loading states, and the complete poem when available
     * Can be placed anywhere in your game interface
     */
    const AIPoetryDisplay = ({ className }) => {
    const { 
        aiResponse, 
        isLoading, 
        completedPoem, 
        error, 
        resetAI 
    } = useAI();

    // If there's no AI activity yet, don't render anything
    if (!aiResponse && !isLoading && !completedPoem && !error) {
        return null;
    }

    return (
        <div className={`ai-poetry-display ${className || ""}`}>
        {/* Error message (if any) */}
        {error && (
            <div className="ai-error">
            <p>{error}</p>
            </div>
        )}

        {/* Loading state */}
        {isLoading && (
            <div className="ai-loading">
            <p>The poem is forming...</p>
            </div>
        )}

        {/* AI response to clicks */}
        {!isLoading && aiResponse && !completedPoem && (
            <div className="ai-response">
            <p>{aiResponse}</p>
            </div>
        )}

        {/* Complete poem (when available) */}
        {completedPoem && (
            <div className="complete-poem">
            <h3>The Complete Poem</h3>
            <pre className="poem-text">{completedPoem}</pre>
            
            <button 
                onClick={resetAI} 
                className="poem-reset-button"
            >
                Close
            </button>
            </div>
        )}
        </div>
    );
    };

    AIPoetryDisplay.propTypes = {
    className: PropTypes.string
    };

export default AIPoetryDisplay;