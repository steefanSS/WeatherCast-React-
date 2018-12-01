import React , {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from "../components/googlemap";

 class WeatherList extends Component{
    renderWeather(cityData){

        //to avoid bloating code
        const name= cityData.city.name;
        const temps=cityData
                    .list
                    .map(weather => weather.main.temp);

        const pressure= cityData
                        .list
                        .map(weather => weather.main.pressure);

        const humidity = cityData
                         .list
                         .map(weather => weather.main.humidity);

        const { lon, lat } = cityData.city.coord;

        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color={"red"} units={"C"}/></td>
                <td><Chart data={pressure} color={"green"} units={"hPA"}/></td>
                <td><Chart data={humidity} color={"gray"} units={"%"}/></td>
            </tr>
        )
    }
    render (){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody >
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
//there is only one argument so we can use ES6 to clean up a bit
function mapStateToProps({weather}) {
    return {weather}; //{weather} === {weather:weather}
}

export default connect (mapStateToProps)(WeatherList)