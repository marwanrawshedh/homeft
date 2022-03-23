import React, { useState } from 'react'
import Signupform from './Signupform'
import SigninForm from './SigninForm'

export default function Signup() {

    const [showSignUp, setShowSignUp] = useState(false)
    
    return (
        <div>
            {
                showSignUp?<Signupform />:<SigninForm setShowSignUp={setShowSignUp}/>
            }
            
            
        </div>
    )
}
