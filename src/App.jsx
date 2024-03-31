import { useState } from "react"
import "./App.css"
import phrases from "./utils/phrases.json"
import arrImg from './utils/arrImg.json'
import PhraseSelect from "./componentes/PhraseSelect";
import ButtonRan from "./componentes/ButtonRan";
import random from "./utils/random";


function App() {

  const [arrPhrase, setArrPhrase] = useState(phrases[0].phrase)
  const [bgSelect, setBgSelect] = useState(random(arrImg))
  const [txt, setTxt] = useState("Abre una galleta")
  const [rect, setRect] = useState("a")

  const rectStyle = {
    backgroundImage: `url(./assets/background/rectangle${rect}.svg)`
  }


  const bgStyle = {
    backgroundImage: `url(./assets/background/fondo${bgSelect}.jpg)`
  }
  console.log(bgSelect)
  console.log(arrPhrase);

  return (
    <>
      <div className="background" style={bgStyle}>
        <h1 className="title">GALLETAS DE LA FORTUNA</h1>
        {arrPhrase !== null && (
          <PhraseSelect
            arrPhrase={arrPhrase}
            rectStyle={rectStyle}
          />
        )}
        <ButtonRan
          setArrPhrase={setArrPhrase}
          txt={txt}
          setTxt={setTxt}
          setBgSelect={setBgSelect}
          setRect={setRect}
        />
      </div>
      <footer className="footer">
        <span className="footer-span"> REALIZADO POR: HIROSHI WATANABE - 2024 </span>
      </footer>
    </>
  )
}

export default App
