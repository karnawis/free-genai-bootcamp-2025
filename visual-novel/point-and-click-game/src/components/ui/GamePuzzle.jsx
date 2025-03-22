import { useGameProvider } from '../../hook/useCustomHook';

const Puzzle = () => {
    const { puzzleWords, trackedScenes } = useGameProvider();


const puzzleClass = (puzzleWord) => {
    console.log("tracked scene >>", trackedScenes, "puzzleWord.key", puzzleWord.key, puzzleWord.name, puzzleWord)    
    if (trackedScenes.includes(puzzleWord.key)) {
        console.log('completed',trackedScenes)
        return "puzzle-completed"
    } else {
        return "puzzle-not-completed"
        //console.log('not completed', 'trackedScenes.includes(puzzle.key)', trackedScenes.includes(puzzle.key), 'trackedScenes.includes(puzzle.key)', trackedScenes)
    }

    
    // alert(puzzle)
    // if (trackedScenes.includes(puzzle.key)) {
    //     return "scene-completed";
    // }
    // return "";
    
};


    return (
    <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Puzzle</h2>
        <ul>
            {puzzleWords.map((puzzleWord) => (
                <li 
                    key={puzzleWord.key}
                    className={puzzleClass(puzzleWord)} 
                >
                    {puzzleWord.name}
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Puzzle;