import { useGameProvider } from "../../hook/useCustomHook"
import PropTypes from 'prop-types'

const Verbs = () => {
    const { verbs, 
            currentVerb, 
            handleSelectVerb,
            handleCancelVerb,          
        } = useGameProvider()

    const Active = ({ verb }) => (
    <>
        <button
            id="verb-active"
            className='verb-active text-slate-500 px-5 py-2.5'
            onClick={() => handleCancelVerb()}
            >
            {verb}
            <span className="text-slate-500 px-5 py-2.5">[X]</span>
        </button>
    </>
    )

    const Inactive = ({ verb }) => (
        <button id="verb-inactive"
            className='verb-inactive text-slate-500 px-5 py-2.5'
            onClick={() => {
            handleSelectVerb(verb)
            }}
            >
            {verb}
        </button>
    )

    Active.propTypes = {
        verb: PropTypes.string.isRequired,
    }
    
    Inactive.propTypes = {
        verb: PropTypes.string.isRequired,
    }

return (
    <div id='verbs' className="p-3 bg-white rounded-lg shadow absolute bottom-0 right-0">
        <h2 className="text-slate-800 text-3xl">Verb</h2>
        <ul>
        {verbs.map((verb) => (
            <li key={verb}>
            {verb === currentVerb ? (
                <Active verb={verb} />
            ) : (
                <Inactive verb={verb} />
            )}
            </li>
        ))}
        </ul>
    </div>
    )
}

export default Verbs