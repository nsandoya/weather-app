import './App.css';
import SearchCityWeather from "./components/SearchCityWeather"
import RenderCityWeather from "./components/RenderWeather"
import { UseWeatherContext } from './context/WeatherContext';
//import { SuggestedCitiesList } from './components/SuggestedCities';

const App = () => {
    const { loading, error} = UseWeatherContext();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

      return(
      <>
        <SearchCityWeather></SearchCityWeather>
        {/* <SuggestedCitiesList></SuggestedCitiesList> */}
        <RenderCityWeather></RenderCityWeather>
      </>
    )

}

export default App
