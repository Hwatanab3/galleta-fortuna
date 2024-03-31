import "./phraseSelect.css"

const PhraseSelect = ({ arrPhrase, rectStyle }) => {



    return (
        <div className='container-phrase' style={rectStyle}>
            <span className='phrase-txt'>{arrPhrase.phrase}</span>
        </div>
    )
}

export default PhraseSelect

