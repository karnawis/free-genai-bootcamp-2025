import { useGameProvider } from "../../hook/useCustomHook";
const Details = () => {
    const  {  currentDetails } = useGameProvider();
    return (
        <div id="details"  className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Details About Each Scene</h2>
            <p className="text-slate-500">Current Scene: { currentDetails}</p>
        </div>
    );
}

export default Details
