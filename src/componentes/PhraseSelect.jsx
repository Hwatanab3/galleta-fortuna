import React from 'react'
import "./phraseSelect.css"

const PhraseSelect = ({ phrase }) => {


    return (
        <div className='container-phrase'>
            <span className='phrase-txt'>{phrase}</span>

        </div>
    )
}

export default PhraseSelect