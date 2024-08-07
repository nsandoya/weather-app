import { UseWeatherContext } from "../context/WeatherContext"
import Loading from "./Loading"
import NotFound from "./NotFound"

const RenderWeather = () => {
    const {weather, loading, error} = UseWeatherContext()
    const weatherToUse = weather.data
    //console.log("Clima a render",weatherToUse)
    //console.log("Iconito", weatherToUse.current.condition.icon)
    /* if (loading) {
         console.log("Cargando")
         return <p>Loading...</p>;
     }

     if (error) {
         console.log("Error", error)
         return <p>Error: {error.message}</p>;
     } */
    return(
        <>
            {error && <NotFound></NotFound>}
            {loading && <Loading></Loading>}
            <div className="container">
                <h2 className="title">{weatherToUse.location.name}, {weatherToUse.location.country}</h2>
                <h1 className="temp">{weatherToUse.current.temp_c}°C</h1>
                <img className="weather-icon" src={weatherToUse.current.condition.icon}/>
                <h3 className="clouds">{weatherToUse.current.condition.text}</h3> 
                <div className="stats">
                    <div className="term-sensation">
                        <span>Term sensation</span>
                        <span className="weather">{weatherToUse.current.feelslike_c}°C</span>
                    </div>
                    <div className="humidity">
                        <span>Humidity</span>
                        <span className="weather">{weatherToUse.current.humidity}%</span>
                    </div>
                    <div className="other">
                        <span>Rain</span>
                        <span className="weather">{weatherToUse.current.precip_mm} mm</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default RenderWeather