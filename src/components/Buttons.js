import './styles/Buttons.css'

const buttons = [
  {char: 'A', sound: '../sounds/boom.wav'},
  {char: 'S', sound: '../sounds/clap.wav'},
  {char: 'D', sound: '../sounds/hihat.wav'},
  {char: 'F', sound: '../sounds/kick.wav'},
  {char: 'G', sound: '../sounds/openhat.wav'},
  {char: 'H', sound: '../sounds/ride.wav'},
  {char: 'J', sound: '../sounds/snare.wav'},
  {char: 'K', sound: '../sounds/tink.wav'},
  {char: 'L', sound: '../sounds/tom.wav'},
]

const Buttons = ({ onButtonClick }) => {

const clickHandler = char => {
  onButtonClick(char)
}
  

  return (
    <div>
      {buttons.map(button =>
        <button
        key={button.char}
        onClick={() => clickHandler(button.char)}
        className='button' >
        </button>
        )}
    </div>
  )
}

export default Buttons;