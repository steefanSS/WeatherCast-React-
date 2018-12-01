import axious from 'axios'

//ActionCreator.
const API_KEY='dfea15f219c55bddeeef80476f18dfac';
//To avoid CORPS error thrown when using openweather API, we must use "api" in url instead of "sample
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//It's important to keep type between ActionCreators and Reducers consistent

export const FETCH_WEATHER = 'FETCH_WEATHER'

//To fetch data we need city name and country code according to API docs.
//So every time someone uses fetch, he need to pass name of the city as argument
export function fetchWeather(city) {

    //then we return promise using package axios and pass it as payload
    const url=`${ROOT_URL}&q=${city},(rs,sg)&units=metric`;
    const request=axious.get(url);

    console.log('Request',request)

    return {
        type:FETCH_WEATHER,
        payload:request
    }
}