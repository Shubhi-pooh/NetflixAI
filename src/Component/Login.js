 import Header from './Header'
 import {useState} from 'react'
 
 const Login = () => {

  const[isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
        <Header/>

        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg' alt='background' />

        </div>

        <form className='absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black p-12 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In ": "Sign Up"}</h1>
            <input type='text' placeholder='Email or mobile number' className='p-4 my-4 w-full bg-gray-700 border-slate-500 border-2 rounded-lg' />
            <input type='password' placeholder='Passowrd' className='p-4 my-4 w-full bg-gray-700 border-slate-500 border-2 rounded-lg' />
            <br/>
            <button className='p-4 my-6 bg-red-600 text-center w-full rounded-lg text-xl'>{isSignInForm ? "Sign In ": "Sign Up"}</button>
            {isSignInForm ? 
            <p className='py-4 text-zinc-400 text-xl' onClick={toggleSignInForm}>New to Netflix? <span className='hover:underline cursor-pointer text-white'>Sign Up Now.</span></p>
            : 
            <p className='py-4 text-zinc-400 text-xl' onClick={toggleSignInForm}>Already registered? <span className='hover:underline cursor-pointer text-white'>Sign In Now.</span></p>

            } 
        </form>

        </div>
    ) 
}
 
export default Login;




