import { useState } from "react"
import "./App.css"
import phrases from "./utils/phrases.json"
import PhraseSelect from "./componentes/PhraseSelect";
import BgImg from "./componentes/BgImg";
import ButtonRan from "./componentes/ButtonRan";


function App() {

  const [isIndex, setIsIndex] = useState(null)
  const [bgSelect, setBgSelect] = useState(Math.floor(Math.random() * 4) + 1)
  const [txt, setTxt] = useState("Abre una galleta")

  const NewCoockie = () => {
    const newIndex = Math.floor(Math.random() * phrases.length);
    setIsIndex(newIndex)

    const newBg = Math.floor(Math.random() * 4) + 1;
    setBgSelect(newBg);

    const newTxt = "Ver Otra";
    setTxt(newTxt)
  }


  return (
    <>
      <h1 className="title">GALLETAS DE LA FORTUNA</h1>
      {isIndex !== null && (
        <PhraseSelect
          phrase={phrases[isIndex].phrase}
        />
      )}
      <ButtonRan
        onclick={NewCoockie}
        txt={txt}
      />
      <BgImg
        srcImg={`./assets/background/fondo${bgSelect}.jpg`}

      />
    </>
  )
}

export default App
