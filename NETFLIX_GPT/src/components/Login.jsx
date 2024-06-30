import React, { useState } from 'react'
import Header from './Header'

function Login() {
    const [isSignIn, setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
    return (
        <>
            <div><Header></Header></div>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="BG" />
            </div>
            <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80' >
                <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type="text" placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700' />
                }
                <input type="text" placeholder='email' className='p-2 my-4 w-full bg-gray-700' />

                <input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-700 ' />

                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign in</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign up" : "Already Registered? Sign In"}</p>

            </form>

        </>

    )
}

export default Login