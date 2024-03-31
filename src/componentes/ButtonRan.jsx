import "./buttonRan.css"
import random from '../utils/random'
import arrPhrase from '../utils/phrases.json'
import arrImg from '../utils/arrImg.json'

const ButtonRan = ({ setArrPhrase, txt, setTxt, setBgSelect, setRect }) => {

    const handlePhrase = () => {
        setArrPhrase(random(arrPhrase))
        setTxt('Ver Otra')
        setBgSelect(random(arrImg))
        setRect('1')
    }

    return (
        <div className='container-btn'>
            <button className='btn' onClick={handlePhrase}>
                {txt}
            </button>
        </div>
    )
}

export default ButtonRan