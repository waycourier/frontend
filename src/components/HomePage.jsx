import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PackageList from './PackageList'
import LocationError from './LocationError';

function HomePage() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locPermision, setLocPermision] = useState(false);

  const success = (pos) => {
    const cord = pos.coords;

    console.log(cord.latitude + " , "+ cord.longitude + " Accuracy : "+ cord.accuracy);
    setLatitude(cord.latitude);
    setLongitude(cord.longitude);
    setLocPermision(true);
  }

  const errors = (err) => {
    console.log("Error occured");
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };



  const getUserLocation = () => {
    if(navigator.geolocation){
      //navigator.geolocation.getCurrentPosition(success, errors);

      navigator.permissions.query({name : "geolocation"})
      .then(function (result){
        console.log(result);
        
        if(result.state === "granted"){
          setLocPermision(true)
          navigator.geolocation.getCurrentPosition(success, errors, options);
          console.log("GRANTED" + locPermision);
          
        }
        else if(result.state === "prompt"){
          navigator.geolocation.getCurrentPosition(success, errors, options);
          console.log("PROMPT");
        }
        else if(result.state ==="denied"){
          setLocPermision(false)
          console.log("No Premission");

        }
      })
    }
  }

  useEffect(()=>{
    getUserLocation()
  },[])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {
        locPermision ? <PackageList latitude={latitude} longitude={longitude   } /> : <LocationError reGrantaccess={getUserLocation} />
      }
      

      <div className="flex flex-col sm:flex-row justify-center text-white gap-4 mt-auto">
        <button className="bg-green-500 sm:w-1/2 py-3 sm:py-4 hover:bg-green-600 active:scale-[.99] active:duration-75 transition-all text-xl">Create a Package request</button>
        <button className="bg-green-500 sm:w-1/2 py-3 sm:py-4 hover:bg-green-600 active:scale-[.99] active:duration-75 transition-all text-xl">Create a Ride request</button>
      </div>
    </div>
  );
}

export default HomePage
