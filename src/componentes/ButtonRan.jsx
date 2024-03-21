import React from 'react'
import "./buttonRan.css"

const ButtonRan = ({ onclick, txt }) => {

    return (
        <div className='container-btn'>
            <button className='btn' onClick={onclick}>
                {txt}
            </button>
        </div>
    )
}

export default ButtonRan