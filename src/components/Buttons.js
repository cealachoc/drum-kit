import { useState } from 'react'
import './styles/Buttons.css'

const buttons = [
  {char: 'A', des: 'Boom', datakey: '65', sound: require('../sounds/boom.wav')},
  {char: 'S', des: 'Clap', datakey: '83', sound: require('../sounds/clap.wav')},
  {char: 'D', des: 'Hi-Hat', datakey: '68', sound: require('../sounds/hihat.wav')},
  {char: 'F', des: 'Kick', datakey: '70', sound: require('../sounds/kick.wav')},
  {char: 'G', des: 'Open Hat', datakey: '71', sound: require('../sounds/openhat.wav')},
  {char: 'H', des: 'Ride', datakey: '72', sound: require('../sounds/ride.wav')},
  {char: 'J', des: 'Snare', datakey: '74', sound: require('../sounds/snare.wav')},
  {char: 'K', des: 'Tink',  datakey: '75',sound: require('../sounds/tink.wav')},
  {char: 'L', des: 'Tom',  datakey: '76',sound: require('../sounds/tom.wav')},
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