//import { useState } from "react";
import { UseWeatherContext } from "../context/WeatherContext";


export const SuggestedCitiesList = () => {
    const {city, countries, suggestedCities} = UseWeatherContext()

    // Esto debe resultar en una lista donde se van mostrando las coincidencias de posibles ciudades, según va tipeando el usuario en el input search
    
    if(!suggestedCities){
        return <div>No cities to show</div>
    }
    /* if(city){
        const result = countries.filter()
    } */
    return (
        <>  
            <ul>
                {countries
                /* countries.filter(countrie => countrie.capital[0] == city) */
                /* countries.map(country => country.capital[0]) */}

            </ul>
        </>   
    )
}

