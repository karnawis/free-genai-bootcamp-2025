
import imgBoxPlaceholderPath from '../../assets/images/box.png'
const Interactable = ({ interactable, handler }) => {
    const { x, y, width, height, verbs, image } = interactable

    const handlePointerDown = () => {
        handler(verbs);
    };
    
    return (
    <div className="rounded-lg shadow">
        <div>
            {/* style={{
                background: `url(${image})`,
                backgroundSize: 'cover',
                height: `${height}px`,
                width: `${width}px`,
            }}
            onPointerDown={handlePointerDown} /> */}
            <div id="interactable"
                style={{
                position: 'absolute',
                left: x,
                top: y,
                width: width,
                height: height,
                //backgroundImage: `url(./images/${image || imgBoxPlaceholder })`,
                backgroundImage: `url(${imgBoxPlaceholderPath }})`,
                opacity: 0.1,
                zIndex: 999,
                border: '1px solid black',
                display: 'block',
                background: 'yellow',
                borderRadius: '30%',
                }}
                onClick={handlePointerDown}
        /></div>
    </div>
    )
}

export default Interactable

