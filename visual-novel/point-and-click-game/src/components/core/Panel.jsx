import PropTypes from 'prop-types';
import { useGameProvider } from '../../hook/useCustomHook';
import PanelButtons from '../ui/PanelButtons';


const Panel = () => {
    const { currentScene, scenes, handleExit } = useGameProvider();
    const initialScene = scenes.scene1;
    const sceneToShow = currentScene || initialScene;

    if (!sceneToShow.exits) {
        return (
            <div className="panel">
                <p className="text-red-500">No exits available.</p>
            </div>
        );
    }

    const exits = sceneToShow.exits;

    const Exit = ({ exitName }) => {
        const exit = scenes[exitName]
        return (
            <td className="exit"> 
                <PanelButtons name={exitName} onClick={() => handleExit(exit)} />
            </td>
        )
        }
    const NoExit = () => {
        <PanelButtons name='' onClick={(e) => e.preventDefault()} />
    }

    // 9x9 grid for now
    const rowsMap = [
        ["a1", "a2", "a3"],
        ["b1", "b2", "b3"],
        ["c1", "c2", "c3"],
    ];

    Exit.propTypes = {
        exitName: PropTypes.string.isRequired,
    };

    return (
    <div id="panel" className="absolute top-0 right-0 z-40">
        <table>
            <tbody>
            {rowsMap.map((rowMap, rowMapIndex) => (
                <tr key={rowMapIndex} className="row">
                    {rowMap.map((cell) =>
                        exits?.[cell] ? (
                            <Exit
                                key={cell}
                                exitName={exits[cell]}
                            />
                        ) : (
                            <NoExit key={cell} />
                        )
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
};


export default Panel;