import { useState } from 'react';
import PropTypes from 'prop-types';
import useSoundHandler from '../../hook/useSoundHandler';
import imageIntro from '../../assets/images/clockspax-intro.jpg'
import track from '../../assets/sounds/soundreveal.wav';

const GameWrapper = ({ children }) => {
    const { handlePlaySound } = useSoundHandler(track);
    const [reveal, setRevealmessage] = useState(true);

    const revealScreenOn = () => {
        handlePlaySound();
        setRevealmessage(false); //set false in prod mode
    }
{/*}
    const [creditOpen, setCreditOpen] = useState(false); // Add this line

    const creditsScreenOn = () => {
        playReveal()
        setCreditsOpen(true)
    }

    const creditsScreenOnOff = () => {
        playReveal()
        setCreditsOpen(false)
    }
*/}

    console.log('reveal >>', reveal)
    return (
        <div id="game-wrapper" className="relative bg-black-800 text-light min-h-screen">
            {reveal ? (
                <div id='reveal-screen'>
                    <h1 className='mb-8 text-5xl font-bold text-white-500'>Welcome to clockPax Game</h1>
                    <p className='mb-8'>This nonlinear structure ties the worlds together through Fefe’s perspective, blending surrealism, emotional depth, and a sense of discovery.</p>
                    <img className="mb-8 rounded-lg mx-auto w-full md:w-1/2" src={imageIntro} alt='clockPax' />
                    <button className='bg-purple-700 p-8 mb-8 rounded-lg' onClick={ revealScreenOn }>Ready to play</button>
                </div>
            ) : (
                children
            )}
        </div>
    )
}

GameWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GameWrapper;
