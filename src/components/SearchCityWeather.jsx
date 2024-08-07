import { useState } from "react";
import { UseWeatherContext } from "../context/WeatherContext";

const SearchCityWeather = () => {
    const [inputValue, setInputValue] = useState('');
    const {setCity} = UseWeatherContext()
    
    // Una vez tengo todos los países y ciudades, los guardo en sus states, y filtro el input del usuario en esos states. Al hacer click en la lista, uso el nombre del item (la ciudad) y la envío como argumento a setCity

    const handleSearch = () => {
        if(inputValue.trim()){
            setCity([inputValue.trim()])
            setInputValue('')
        }
    }

    const handleKeyPress = (e) => {
            if (e.key === "Enter") {
                handleSearch();
            }/* else{
                //console.log(inputValue)
                let inputResult = cities.filter(cityItem => cityItem == city)
                console.log(inputResult)
            } */
    }

    return(
        <div className="search-cont">
            <input type="text" id="search" value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} onKeyUp={handleKeyPress}
                placeholder="Search a city..." />
            <button id="go-search" onClick={handleSearch}><i className="bi bi-search search-btn"></i></button>
        </div>
    );
}

export default SearchCityWeather