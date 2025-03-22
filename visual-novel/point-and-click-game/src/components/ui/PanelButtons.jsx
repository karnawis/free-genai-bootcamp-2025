import propTypes from 'prop-types';

const PanelButtons = ({ name, onClick }) => {
    return (
        <button
            className='exit m-1 p-3 bg-slate-900 hover:bg-gray-400 rounded-lg flex items-center justify-center text-white-800 z-40'
            onClick={onClick}>
                {name}
        </button>
    )
}

PanelButtons.propTypes = {
    name: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}

export default PanelButtons
