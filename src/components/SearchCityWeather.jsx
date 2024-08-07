import { useState } from "react";
import { UseWeatherContext } from "../context/WeatherContext";

const SearchCityWeather = () => {
    const [inputValue, setInputValue] = useState('');
    const {setCity} = UseWeatherContext()
    
    const handleSearch = () => {
        if(inputValue.trim()){
            setCity([inputValue.trim()])
            setInputValue('')
        }
    }

    const handleKeyPress = (e) => {
            if (e.key === "Enter") {
                handleSearch();
            }
    }

    return(
        <div className="search-cont">
            <input type="text" id="search" value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} onKeyUp={handleKeyPress}
                placeholder="Search a city..." />
            <button id="go-search" onClick={handleSearch}><i className="bi bi-search"></i></button>
        </div>
    );
}

export default SearchCityWeather