import React, { useState } from 'react'
import loginPageImg from '../assets/illustrations/delivering.png'
import logo from '../assets/logoWhite.png'
import axios from 'axios'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function Signup() {
    const baseAPIUrl = "http://localhost:8080/api/users/"

    const [formData, setFormData] = useState({
        'firstName': "",
        'lastName': "",
        'username': "",
        'email': "",
        'password': "",
        'confirmPassword': ""

    })

    const [isvalidEmail, setIsValidEmail] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
        //console.log(formData);
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(value)

            setIsValidEmail(isValid)
        }
    }

    const createUserFn = async (dataForUser) => {
        try {
            const createdUserResponse = await axios.post(baseAPIUrl, dataForUser, {
                auth: {
                    username: 'admin',
                    password: 'admin'
                }
            });

            if (createdUserResponse.status === 201) {
                console.log("User created :");
            }
            else {
                console.log("Unable to create user");
            }
        } catch (error) {

        }
    }

    const handleFormSubmit = async () => {
            const userData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                username: formData.username,
                password: formData.password
            }

            await createUserFn(userData);
    }

    const postSignInWithGoogle = async (token) => {
        const dataFromGoogle = jwtDecode(token);
        console.log(dataFromGoogle);
        console.log(dataFromGoogle.given_name + " "+ dataFromGoogle.family_name +" "+ dataFromGoogle.email)

        const userData = {
            firstName: dataFromGoogle.given_name,
            lastName: dataFromGoogle.family_name,
            email: dataFromGoogle.email,
            username: dataFromGoogle.email.split('@')[0],
            password: uuidv4()
        }

        await createUserFn(userData);
    }

    return (
        <>
            <div id="loginmain" className='bg-gray-200 flex w-full h-screen '>
                <div className="w-full flex items-center justify-center lg:w-1/2" id='left'>
                    <div id='innerContainer' className="bg-white px-10 py-8 rounded-2xl">

                        <span className='font-medium text-5xl text-gray-500 mt-4'>Signup</span><br />

                        <div className="mt-2 flex flex-col">
                            <label htmlFor="firstName" className='text-lg font-medium text-gray-500'>First name *</label>

                            <input type="text" className='w-3/4 min-w-96 border-2 border-blue-200 text-lg  rounded-xl p-2 mt-1 bg-transparent' name="firstName" id="firstName" placeholder='Type your first name' value={formData.firstName} onChange={handleChange} />

                            {
                                formData.firstName.trim().length === 0 &&
                                <span className='text-sm font-extralight text-red-800'>First name is required</span>
                            }

                        </div>

                        <div className="mt-2 flex flex-col">
                            <label htmlFor="lastName" className='text-lg font-medium text-gray-500'>Last name</label>

                            <input type="text" className='w-3/4 min-w-96 border-2 border-blue-200 text-lg  rounded-xl p-2 mt-1 bg-transparent' name="lastName" id="lastName" placeholder='Type your last name' value={formData.lastName} onChange={handleChange} />

                        </div>

                        <div className="mt-2 flex flex-col">
                            <label htmlFor="username" className='text-lg font-medium text-gray-500'>Username *</label>

                            <input type="text" className='w-3/4 min-w-96 border-2 border-blue-200 text-lg  rounded-xl p-2 mt-1 bg-transparent' name="username" id="username" placeholder='Type your username' value={formData.username} onChange={handleChange} />

                            {
                                formData.username.trim().length === 0 &&
                                <span className='text-sm font-extralight text-red-800'>Username  is required</span>
                            }

                        </div>

                        <div className="mt-2 flex flex-col">
                            <label htmlFor="email" className='text-lg font-medium text-gray-500'>Email *</label>

                            <input type="email" className='w-3/4 min-w-96 border-2 border-blue-200 text-lg  rounded-xl p-2 mt-1 bg-transparent' name="email" id="email" placeholder='Type your email' value={formData.email} onChange={handleChange} />
                            {
                                (formData.email.trim().length === 0 || !isvalidEmail) &&
                                <span className='text-sm font-extralight text-red-800'>Valid email is required</span>
                            }

                        </div>

                        <div className="mt-2 flex flex-col">
                            <label htmlFor="password" className='text-lg font-medium text-gray-500'>Password *</label>
                            {/* <FontAwesomeIcon icon={faLock} /> */}
                            <input type="password" className='w-3/4 min-w-96 border-2 border-blue-200 text-lg  rounded-xl p-2 mt-1 bg-transparent' name="password" id="password" placeholder='Type your password' value={formData.password} onChange={handleChange} />
                            {
                                formData.password.trim().length === 0 &&
                                <span className='text-sm font-extralight text-red-800'>Password is required</span>
                            }

                        </div>

                        <div className="mt-2 flex flex-col">
                            <label htmlFor="confirmPassword" className='text-lg font-medium text-gray-500'>Confirm Password *</label>
                            {/* <FontAwesomeIcon icon={faLock} /> */}
                            <input type="password" className='w-3/4 min-w-96 border-2 border-blue-200 text-lg  rounded-xl p-2 mt-1 bg-transparent' name="confirmPassword" id="confirmPassword" placeholder='Re-enter your password' value={formData.confirmPassword} onChange={handleChange} />

                            {
                                (formData.password.trim() !== formData.confirmPassword.trim()) &&
                                <span className='text-sm font-extralight text-red-800'>Password doesn't match</span>
                            }

                        </div>


                        <div className="mt-6 flex flex-col justify-center items-center gap-4">
                            <button className='bg-indigo-500 text-white text-lg font-bold w-1/2 px-2 py-2 font-mono rounded-md  active:scale-[.98] active:duration-75 transition-all' disabled={formData.username.length === 0 || formData.email.length === 0 || formData.firstName.length === 0 || formData.password.length === 0 || formData.confirmPassword.length === 0 || (formData.password.length != formData.confirmPassword.length)} onClick={handleFormSubmit}>Create Account</button>

                            <GoogleOAuthProvider clientId="831930849725-kmorv6ojdbhvuf5tujong28aov9um7ep.apps.googleusercontent.com">
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        postSignInWithGoogle(credentialResponse.credential)
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}
                                />
                            </GoogleOAuthProvider>

                            {/* <button className='flex border border-gray-400  px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-100 active:scale-[.98] active:duration-75 transition-all'>Sign in with Google <img src={googleIcon} alt="google" className='ml-2' /></button> */}
                        </div>

                        <div className="mt-7">
                            <div className="">
                                <span>Already have an account?</span>
                                <Link to="/login" className='ml-1 text-violet-500 font-semibold hover:text-violet-700'>Log in</Link>
                            </div>
                            <div className="w-full flex justify-center mt-2">
                                <Link to="/" className='font-semibold text-blue-500 hover:text-blue-600'> Home </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="right" className='hidden w-1/2 lg:flex bg-purple-400 items-center justify-center'>
                    <div className='flex w-1/2 flex-col gap-12 items-center'>
                        <img src={logo} alt="" className='max-w-44' />
                        <img src={loginPageImg} alt="delivering" className='w-11/12' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
