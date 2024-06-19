import React, { useEffect, useState } from "react";
import liquidImg from '../assets/packageIcons/liquid.png';
const locData = {
    "pickupLat": "22.5705",
    "pickUpLong": "88.3591",
    "deliverLat": "22.5555",
    "deliverLong": "88.3884"
};

const pkg = { "id": "PK8592", "name": "Smartphone", "toAddress": "123 Park Street, Kolkata, West Bengal 700016", "fromAddress": "456 Elgin Road, Kolkata, West Bengal 700020", "description": "Description for Package 1", "pkgType": "electronics", "isFragile": true }

function PackageMap() {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const API_KEY = "AjH62sL4b0AVrNYnMzPUSoYsgo65_IZH1MxlXqE8tLVm8UWHm8XqXE0O_3db81MC";
        const url = `https://www.bing.com/api/maps/mapcontrol?key=${API_KEY}&callback=initMap`;
        window.initMap = initMap;
        loadScript(url);
    }, []);

    useEffect(() => {
        if (map) {
            // Create custom Pushpin
            const base64Img = 'data:image/png;base64,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'

            const deliverBase64Img = 'data:image/png;base64,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'

            const pickUplocation = new Microsoft.Maps.Location(locData.pickupLat, locData.pickUpLong);
            const pickupPin = new Microsoft.Maps.Pushpin(pickUplocation, {
                title: "Pickup",
                subtitle: 'Pick the package',
                icon: base64Img,
            });
            map.entities.push(pickupPin);

            const deliverLocation = new Microsoft.Maps.Location(locData.deliverLat, locData.deliverLong);
            const deliverPin = new Microsoft.Maps.Pushpin(deliverLocation, {
                title: "Deliver",
                subtitle: 'Deliver the package',
                icon: deliverBase64Img,
            });
            map.entities.push(deliverPin);

            // Fetch and render the optimal route
            getRoute(pickUplocation, deliverLocation);
        }
    }, [map]);

    const initMap = () => {
        const bmap = new Microsoft.Maps.Map('#map', {
            center: new Microsoft.Maps.Location(locData.pickupLat, locData.pickUpLong),
            zoom: 14
        });

        // Load the Directions module
        Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
            setMap(bmap);
        });
    };

    const getRoute = (pickupLocation, deliverLocation) => {
        const directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        const startWaypoint = new Microsoft.Maps.Directions.Waypoint({ location: pickupLocation });
        directionsManager.addWaypoint(startWaypoint);

        const endWaypoint = new Microsoft.Maps.Directions.Waypoint({ location: deliverLocation });
        directionsManager.addWaypoint(endWaypoint);

        directionsManager.setRequestOptions({
            routeMode: Microsoft.Maps.Directions.RouteMode.driving
        });

        directionsManager.setRenderOptions({
            //waypointPushpinOptions: { visible: false }
            itineraryContainer: '#printoutPanel'
        });

        directionsManager.calculateDirections();
    };

    return (
        <div>
            <div className="flex h-[80vh]">
                <div className="w-full lg:w-5/6" id="map"></div>
                <div id="printoutPanel" className="hidden lg:flex h-screen] overflow-scroll h-[80vh]"></div>
            </div>
            <div className="flex items-center min-w-full w-full shadow-lg h-[19vh] sm:w-11/12 lg:w-3/4 mb-3 border-2 border-gray-300 rounded-xl" key={pkg.id}>
                <div className="type w-1/4 flex flex-col gap-2 items-center justify-center h-[100%]">
                  <p className="text-fontColor font-semibold">{pkg.name}</p>
                  <img src={liquidImg} alt={pkg.pkgType} className="w-24" />
                </div>
                <div className="details w-3/4 bg-gray-200 pt-2 pl-3 rounded-r-xl pb-2">
                  <div className="flex justify-between pl-3 pr-3">
                    <p className="text-fontColor font-bold bg-gray-300 p-1 rounded-md px-2">{pkg.id}</p>
                    <p className="fragile text-red-400 font-bold">{pkg.isFragile ? 'FRAGILE' : ''}</p>
                  </div>
                  <div className="address flex pl-3 pr-3 space-x-3">
                    <div className="from w-1/2">
                      <p className="text-fontColor text-md font-semibold">Pickup</p>
                      <span className="text-sm font-mono text-fontColor">{pkg.fromAddress}</span>
                    </div>
                    <div className="to w-1/2">
                      <p className="text-fontColor text-md font-semibold">Deliver</p>
                      <span className="text-sm font-mono text-fontColor">{pkg.toAddress}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between items-center pl-4 mr-4">
                    <button className="bg-green-500 p-1 px-5 rounded-md text-white">Deliver</button>
                  </div>
                </div>
              </div>
        </div>
    );
}

function loadScript(url) {
    const index = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.defer = true;

    index.parentElement.appendChild(script);
}

export default PackageMap;
