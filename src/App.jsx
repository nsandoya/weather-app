import './App.css';
import SearchCityWeather from "./components/SearchCityWeather"
import RenderCityWeather from "./components/RenderWeather"
import { UseWeatherContext } from './context/WeatherContext';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
//import { SuggestedCitiesList } from './components/SuggestedCities';

const App = () => {
    const { loading, error} = UseWeatherContext();

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return <NotFound/>;
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
