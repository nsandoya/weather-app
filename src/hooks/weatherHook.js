import { useEffect, useState } from 'react';
import {getWeather} from './services/getWeather';


// useEffect -> Emula el ciclo de vida del componente. 
// En este caso, entiendo que este hook sería útil al inicializar la app
const WeatherHook = () => {
    const [city, setCity] = useState(["quito"]) 
    const [weather, setWeather] = useState([]) 
    useEffect(() => {    
      (async () => {
        // Promesa
        setWeather(await getWeather(city)) 
      })()
    }, [city]); // Acá se indica al hook que esté atento a cambios en el state 'city'
    console.log(weather.data)
    return weather.data // Retorno el state weather
}

export default WeatherHook