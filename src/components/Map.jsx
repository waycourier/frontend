import React from "react";

export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const API_KEY = "AjH62sL4b0AVrNYnMzPUSoYsgo65_IZH1MxlXqE8tLVm8UWHm8XqXE0O_3db81MC";
        const url = ``;
        
        loadScript(url);
        window.initMap = this.initMap;
    }

    componentDidUpdate() {
        //Create custom Pushpin
        const location = new Microsoft.Maps.Location(22.624972, 88.438571);
        var pin = new Microsoft.Maps.Pushpin(location, {
            title: 'ME'
        });

        //Add the pushpin to the map
        this.state.map.entities.push(pin);
    }

    initMap = () => {
        const bmap = new Microsoft.Maps.Map('#map', {
            center: new Microsoft.Maps.Location(22.624972, 88.438571),
            zoom: 16
        });

        this.setState({ map: bmap });
    }

    render() {
        return <div style={{height: "400px", width: "100%"}} id="map"></div>;
    }
}


function loadScript(url) {
    const index = document.getElementsByTagName("script")[0];
    const script = document.createElement("script"); 

    script.src = url;
    script.async = true;
    script.defer = true;

    index.parentElement.appendChild(script);
}