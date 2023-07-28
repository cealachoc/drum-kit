import { useState } from 'react'
import './styles/Buttons.css'
import { useEffect } from 'react'

const buttons = [
  {char: 'A', des: 'Boom', sound: require('../sounds/boom.wav')},
  {char: 'S', des: 'Clap', sound: require('../sounds/clap.wav')},
  {char: 'D', des: 'Hi-Hat', sound: require('../sounds/hihat.wav')},
  {char: 'F', des: 'Kick', sound: require('../sounds/kick.wav')},
  {char: 'G', des: 'Open Hat', sound: require('../sounds/openhat.wav')},
  {char: 'H', des: 'Ride', sound: require('../sounds/ride.wav')},
  {char: 'J', des: 'Snare', sound: require('../sounds/snare.wav')},
  {char: 'K', des: 'Tink', sound: require('../sounds/tink.wav')},
  {char: 'L', des: 'Tom', sound: require('../sounds/tom.wav')},
]

const Buttons = ({ onButtonClick }) => {
  const [clickedButton, setClickedButton] = useState(null)
  
  const playSound = (soundUrl) => {
    const sound = new Audio(soundUrl)
    sound.play();
  }

  
  const clickHandler = (char, soundUrl) => {
    setClickedButton(char);
    playSound(soundUrl);
    
    setTimeout(() => {
      setClickedButton(null)
    }, 250);
  }
  
  const handleKeyClick = (e) => {
    const {key} = e;
    const btn = buttons.find((button) => button.char === key.toUpperCase())

    if (btn) {
      clickHandler(btn.char, btn.sound);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyClick);

    return () => {
      window.removeEventListener('keydown', handleKeyClick)
    }
  });

  return (
    <div>
      {buttons.map(button =>
        <button
        key={button.char}
        onClick={() => clickHandler(button.char, button.sound)}
        className={`button ${clickedButton === button.char ? 'playing' : ''}`} >
          {button.char}
          <br />
          <span className='sound'>{button.des}</span>
        </button>
        )}
    </div>
  )
}

export default Buttons;