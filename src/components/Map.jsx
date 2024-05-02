import React, { useEffect, useState } from "react";
import boxImg from '../assets/box.png'

const dummyPackages = [
    {
      "id": 1,
      "name": "Package 1",
      "description": "Description of Package 1",
      "latitude": 22.620338,
      "longitude": 88.395462
    },
    {
      "id": 2,
      "name": "Package 2",
      "description": "Description of Package 2",
      "latitude": 22.627483,
      "longitude": 88.398705
    },
    {
      "id": 3,
      "name": "Package 3",
      "description": "Description of Package 3",
      "latitude": 22.613194,
      "longitude": 88.391045
    },
    {
      "id": 4,
      "name": "Package 4",
      "description": "Description of Package 4",
      "latitude": 22.619434,
      "longitude": 88.399767
    },
    {
      "id": 5,
      "name": "Package 5",
      "description": "Description of Package 5",
      "latitude": 22.623152,
      "longitude": 88.40615
    },
    {
      "id": 6,
      "name": "Package 6",
      "description": "Description of Package 6",
      "latitude": 22.611715,
      "longitude": 88.389036
    },
    {
      "id": 7,
      "name": "Package 7",
      "description": "Description of Package 7",
      "latitude": 22.614806,
      "longitude": 88.401074
    },
    {
      "id": 8,
      "name": "Package 8",
      "description": "Description of Package 8",
      "latitude": 22.619865,
      "longitude": 88.387799
    },
    {
      "id": 9,
      "name": "Package 9",
      "description": "Description of Package 9",
      "latitude": 22.610876,
      "longitude": 88.396582
    },
    {
      "id": 10,
      "name": "Package 10",
      "description": "Description of Package 10",
      "latitude": 22.624805,
      "longitude": 88.391481
    }]
function Map() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const API_KEY = "AjH62sL4b0AVrNYnMzPUSoYsgo65_IZH1MxlXqE8tLVm8UWHm8XqXE0O_3db81MC";
    const url = `https://www.bing.com/api/maps/mapcontrol?key=${API_KEY}&callback=initMap`;
    loadScript(url);
    window.initMap = initMap;
  }, []);

  useEffect(() => {
    if (map) {
      //Create custom Pushpin
      
      const base64Img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABIQAAASEBDb+0VwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQ2SURBVFiF7ZffT1tlGMe/7/nRHtoCHXTZEDoYCGPZj8SEOPyReEGUaXbhgjjFRE28dfgHCJS2+A/ITIiJyRaTXYATZ7xQY+IvptmCzgw3qEALp0VGoFJW2tOenvd9vZgQynpoy5ze7Ht5vs/znM/75uQ5z0M459iNpj7xPikQDAAA4+hpfsnz027qkGIBApe8LYTDD4KTWQbHl5yg91CHZ/yBAEyN+I8JAvMBeDFP6GeMCX3Nnb0T/wrA7R/OvyArpUNEEN3r0TBS638VUpcDGAbQ39ThmdoVwNK3F9pEu/1Dq62sHiCbzzOpdcRXVKQTsUJAKICLIoOvodMzUxBAYGTgIETaK0vK6w6XWywp25uzsq7FEV9RoSfXCgExOMHHoKL/UGdPKCdAcMR7wBDQA+BNAPJGgGSxodTlhlJamRskuXYXRIsXApIBcF5iGKjv9KgAQALDA9VEMN7lwFsALGaZstUOh8sNxVGR008nYoivqMik1gsB0QnwEWfSe+LhGsmb1LTjlRV7qgRCZLMMRjNIxVeQTqxClK2QLEqWL1kU2Jz7ICt2UF0DoxnTt1PG0uqCqs+F5w+KJ0/UnY6vJzpC4UgsY2TGK5zlVYQIkimIoUO7sww9GYMkKxDl7SAlsDn3Q7baYKSzQThn6cjiwtjsfKg8qWlHOGc3xOdb608BaAFgX4vH60LhyDJl9LcKZ/kjhBDR9BQbINodSJYSiLI1G8Rqg33PfkgWBXo6YUQWwz/OBGeVRDJ5HID9n7Bf7jkp57wqFI5UzUUWwg21tWq9u7qVEMEURE+uIapOwGp3otR1ALLiyPKJbFuJJfmft5eWnsmVb3rVnHP3zNycO6iqwca62qW6mppWbG0I25ROxJBOxKA4KuCodINyHo0n9KSeMdxaSoua5QlmxoYYY/WBYOiJb8auzEQWF6/miw/P/3H1u6+Hx6KxZKWeMdz54k1vYLsoY403p2cwFQxNHnm0MVG1b2/LVn81tjo+F1HtjLETgiCGAECdHv9+dVmtliyKdt8AmyCUHr4RmMLk7PTE0aYmapEkzC+ogkFpFlBsOfJrdCn0NABRTyVM6xUNsKGMQY9dvzUJl9Nxj8cYKwsFfnYCMP147xtgZ/HcfTuH8n6ED1oPAR4C/P8AhsD9HGQId6eV/0oZTjAkUerfHMk+eLutloqklwBvoIj+kKsR7SCDgF9gVPJ3DVyaB3IMpYPdbQ0gggfgXSigkxUIQDlwUWTEe8Y/OrvVMB3Lz51tb+aE9oPgZezwG84DwDkwTATW/6rn85z7Qd7F5P132o8SYnjByelcICYAnHAySkTiOeP59Ped6he8mg12P/sYJ9xHgFM7ARDOvwDQ94rv8vVC6ha9nA52tz0OEB8I2rcBfMUF0tflGb1WTL2iATZ07uxzT3GB+V1OBxjnva/5Ll/ZTZ2/AZtr6ApYv7OQAAAAAElFTkSuQmCC'


      dummyPackages.map((pkg) => {
        const location = new Microsoft.Maps.Location(pkg.latitude, pkg.longitude);
        var pin = new Microsoft.Maps.Pushpin(location, {
            title: pkg.name,
            subtitle: 'fsdf',
            icon: base64Img,
        });
        //Add the pushpin to the map
        map.entities.push(pin);
      })
     
    }
  }, [map]);

  const initMap = () => {
    const bmap = new Microsoft.Maps.Map('#map', {
      center: new Microsoft.Maps.Location(22.624972, 88.438571),
      zoom: 16
    });
    setMap(bmap);
  }

  return <div style={{height: "500px", width: "100%"}} id="map"></div>;
}

function loadScript(url) {
  const index = document.getElementsByTagName("script")[0];
  const script = document.createElement("script"); 

  script.src = url;
  script.async = true;
  script.defer = true;

  index.parentElement.appendChild(script);
}

export default Map;