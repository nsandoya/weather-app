import { useContext } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import getWeather from "../services/getWeather"
import { useEffect } from "react";
import { useState } from "react";
import getCountries from "../services/getCountries";


const WeatherContext = createContext();
// Custom hook para usar el contexto en otros componentes
export const UseWeatherContext = () => {
    const context = useContext(WeatherContext)
    if(!context){
        throw new Error("There's no context to use")
    }
    return context
}
export const WeatherContextProvider = ({ children }) => {
    const [city, setCity] = useState(["quito"]) 
    const [weather, setWeather] = useState([]) 
    const [countries, setCountries] = useState()
    const [suggestedCities, setSuggestedCities] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {    
        (async () => {
            setLoading(true); // Iniciar carga
            try {
                const weatherData = await getWeather(city);
                const countriesData = await getCountries();

                setWeather(weatherData);
                setCountries(countriesData);

                setError(null); // Limpiar cualquier error anterior
            } catch (err) {
                setError(err); // Guardar el error en caso de fallo
            } finally {
                setLoading(false); // Finalizar carga
            }
        })();

    }, [city]);
    //console.log("Clima", weather)
    const contextValues = {city, weather, setCity, countries, setCountries, suggestedCities, setSuggestedCities, loading, error}
    return(
        <WeatherContext.Provider value={contextValues}>
            {children}
        </WeatherContext.Provider>
    )
}

// Usar PropTypes ayuda a validar los tipos de las props en tiempo de desarrollo y previene errores.
WeatherContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

