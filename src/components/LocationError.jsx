import React from 'react'
import locationImg from '../assets/illustrations/location.png'
function LocationError({reGrantaccess}) {
    return (
        <div className="w-full mt-20 lg:mt-0 flex flex-col justify-center items-center gap-8">
            <div className="flex justify-center items-center w-full ">
                <div className="flex flex-col justify-center items-center lg:w-1/2 gap-8">
                    <p className="flex justify-center font-playwrite font-bold text-6xl text-webGreen">Ooops!</p>
                    <p className="flex justify-center font-raleway font-semibold text-xl">We need location access in order to serve you.</p>
                    {/* <button className='bg-blue-400 max-w-fit text-white p-2 rounded-full px-4 hover:bg-blue-500 active:scale-[.99] active:transition-all duration-75' onClick={reGrantaccess}>
                        Grant location access
                    </button> */}
                </div>

                <img src={locationImg} alt="location_access" className="hidden lg:flex lg:w-1/2 max-w-screen-sm" />
            </div>

        </div>
    )
}

export default LocationError
