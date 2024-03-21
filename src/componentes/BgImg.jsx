import React from 'react'
import "./bgImg.css"


const BgImg = ({ srcImg }) => {
    return (
        <>
            <div className='bg'>
                <img className='bg-img' src={srcImg} alt="" />
            </div>
            <div className='bg-banner'>
                <img className='banner' src="./assets/background/rectangle1.svg" alt="" />
            </div>
        </>
    )
}

export default BgImg