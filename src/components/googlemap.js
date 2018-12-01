/*This component is different because it's third party library that doesn't know how
* to work in React eco system. This is how we deal with such third-part libraries.
*
* They don't know what the JSX is or what the Render method is*/


import React,{Component} from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        //this.ref.map is the html element that embedded map is going to be render by google.map.Maps
        //to pull lng from openweatherAPI lon
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat:this.props.lat,
                lng:this.props.lon
            }
        });
    }
    //we need to reference html element (div in this case) where the map is going to be rendered
    //by using keyword "ref"
    render(){
       return <div ref="map"/>;
    }
}

export default GoogleMap;