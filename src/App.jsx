import './App.css';
import SearchCityWeather from "./components/SearchCityWeather"
import RenderCityWeather from "./components/RenderWeather"
import { UseWeatherContext } from './context/WeatherContext';

const App = () => {
    const { loading, error} = UseWeatherContext();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
  // Al implementar el componente App, realiza esto
  // Y qué es esto? Es una emulación del life cycle del componente, lograda con hooks
      return(
      <>
        <SearchCityWeather></SearchCityWeather>
        <RenderCityWeather></RenderCityWeather>
      </>
    )
  // Poner aquí los componentes SearchInput y RenderWeather
}

export default App
