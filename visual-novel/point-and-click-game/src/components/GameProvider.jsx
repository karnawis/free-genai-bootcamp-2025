    import { createContext, useState } from "react";
    import PropTypes from "prop-types";
    import useSoundHandler from "../hook/useSoundHandler";
    import { scenes, verbs, puzzleWords } from "../data/scenes";
    import track from "../assets/sounds/soundbuttonclick.wav";

    export const GameContext = createContext()

    export const GameProvider = ({ children }) => {

    //const { scenes, verbs, poemWords } = data
    const [currentScene, setCurrentScene] = useState(scenes.scene3 || null)
    const [currentDetails, setCurrentDetails] = useState(
        scenes.scene3?.details || ["What would you like to do?"]
    )
    const [currentVerb, setCurrentVerb] = useState("explore")   
    const { handlePlaySound } = useSoundHandler(track)
    const handleSelectVerb = (verb) => {
        setCurrentVerb(verb)
        const details = `What would you like to ${verb}?`
        setCurrentDetails([details])
        handlePlaySound();
    }

    const handleInteraction = (verbs) => {
        if (verbs?.[currentVerb]?.details) {
            setCurrentDetails(verbs[currentVerb].details)
            setCurrentVerb("default")
        }
        if (verbs?.[currentVerb]?.aheadScene) {
            const aheadScene = scenes[verbs[currentVerb].aheadScene]
            setCurrentScene(aheadScene);
            setCurrentDetails(aheadScene.details);
            setCurrentVerb("default")
            addTrackedScene(aheadScene.key)
        }
    } //end of handleInteraction

    const handleCancelVerb = () => {
        setCurrentVerb("")
        setCurrentDetails(setCurrentScene?.details || ["What would you like to do?"])
        handlePlaySound();
    }

    const [trackedScenes, setTrackedScenes] = useState(["s2"])//change it 

    const addTrackedScene = (sceneKey) => {
        const index = trackedScenes.indexOf(sceneKey)
        if (index === -1) {
            let updatedScenes = [...trackedScenes]
            updatedScenes.push(sceneKey)
            setTrackedScenes(updatedScenes)
        }
    }
    /*
        
    const clearTrackedScenes = () => setTrackedScenes([])

    const completedPoemWords = poemWords.filter((poemWord) => trackScenes.includes(poemWord.key))
    const PoemCompletionPercentage = (completedPoemWords.length / poemWords.length) * 100
*/
    const handleExit = (exit) => {
        setCurrentScene(exit) 
        setCurrentDetails(exit.details)
        addTrackedScene(exit.key)
    }

    return (
        <GameContext.Provider 
            value={{ 
                scenes, 
                currentScene, 
                setCurrentScene, 
                puzzleWords,
                verbs,
                currentVerb,
                setCurrentVerb, 
                interactables: currentScene?.interactables || [],
                currentDetails,
                setCurrentDetails,
                handleInteraction,
                handleSelectVerb ,
                handleExit,
                handleCancelVerb,
                trackedScenes,
                setTrackedScenes,
                addTrackedScene
            }}>
            {children}
        </GameContext.Provider>
        )
    }

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
