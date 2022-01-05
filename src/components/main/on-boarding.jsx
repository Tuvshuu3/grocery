import React from "react"
import '../../styles/onBoarding.css'
import Text from '../../assets/text.svg'
import { Link } from "react-router-dom"

const OnBoarding = () => {
    return(
        <div className='body_onboarding'>
            <div className='bottom'>
                <img src={Text}></img>
                <Link to='/shop'>
                    <button class="Start_Button"><span>Get Started </span></button>
                </Link>
            </div>
        </div>
    )
}

export default OnBoarding;