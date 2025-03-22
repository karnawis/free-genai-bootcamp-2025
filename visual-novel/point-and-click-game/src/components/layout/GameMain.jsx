import Details from '../ui/GameDetails';
import Puzzle from '../ui/GamePuzzle';
import Views from '../Game/Views';
import Verbs from '../core/Verbs';
import Panel from '../core/Panel';

const GameMain = () => {
    return (
        <div className="w-full">
            <div className="relative mb-4">
                <Views />
                <Panel />
                <Verbs />
            </div>
            <div className='grid grid-cols-2 gap-4 p-4'>
                <Details />
                <Puzzle />
            </div>
        </div>
    );
};

export default GameMain;