import './Buttons'
import Buttons from './Buttons';
import './styles/Display.css'

const Display = () => {
  
  const onButtonClick = (e) => {
    console.log(e)
  }
  
  return (
    <div>
      <Buttons onButtonClick={onButtonClick}/>
    </div>
  )
}

export default Display;