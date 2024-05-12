import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import loginPageImg from '../assets/delivering.png'
import logo from '../assets/logoWhite.png'
import googleIcon from '../assets/search.png'


function Login() {
  return (
    <>
      <div id="loginmain" className='bg-gray-200 flex w-full h-screen '>
        <div className="w-full flex items-center justify-center lg:w-1/2" id='left'>
          <div id='innerContainer' className="bg-white px-10 py-20 rounded-2xl">

            <div className="w-full flex items-center justify-center bg-red-200 py-2 rounded-md mb-2 font-semibold">
            <span className='text-red-900'>Invalid credentials!</span>
            </div>
            <span className='font-medium text-5xl text-gray-500 mt-4'>Login</span><br />
            
            {/* Username */}
            <div className="mt-4">
              <label htmlFor="username" className='text-lg font-medium text-gray-500'>Username OR Email</label>

              {/* <FontAwesomeIcon icon={faEnvelope} className='text-gray-500'/> */}
              <input type="text" className='w-full border-2 border-blue-200 text-lg  rounded-xl p-2 mt-1 bg-transparent' name="username" id="username" placeholder='Type your username or email' />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className='text-lg font-medium text-gray-500'>Password</label>
              {/* <FontAwesomeIcon icon={faLock} /> */}
              <input type="password" className='w-full border-2 border-blue-200 text-lg  rounded-xl p-2 mt-1 bg-transparent' name="password" id="password" placeholder='Type your password' />
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div className="">
                <input type="checkbox" id='remember' />
                <label htmlFor="remember" className='ml-2 text-gray-600 font-semibold text-base'>Remember me</label>
              </div>

              <button className='text-violet-500 font-semibold hover:text-violet-700'>Forget password?</button>
            </div>

            <div className="mt-6 flex flex-col justify-center items-center gap-4">
              <button className='bg-indigo-400 text-white text-lg font-bold w-1/2 px-2 py-2 font-mono rounded-md hover:bg-indigo-500 active:scale-[.98] active:duration-75 transition-all'>Sign in</button>
              <button className='flex border border-gray-400  px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-100 active:scale-[.98] active:duration-75 transition-all'>Sign in with Google <img src={googleIcon} alt="google" className='ml-2'/></button>
            </div>

            <div className="mt-7">
              <div className="">
                <span>Don't have an account?</span>
                <a href="" className='ml-1 text-violet-500 font-semibold hover:text-violet-700'>Create one</a>
              </div>
            </div>

          </div>
        </div>
        <div id="right" className='hidden w-1/2 lg:flex bg-purple-400 items-center justify-center'>
          <div className='flex w-1/2 flex-col gap-12 items-center'>
            <img src={logo} alt="" className='max-w-44'/>
            <img src={loginPageImg} alt="delivering" className='w-11/12' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
