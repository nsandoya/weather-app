import { ajax } from '../tools/ajax';

const getWeather = async (city) => {
    console.log("Entró a getWeather")
    console.log(city)
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city[0]}`;
    const options = {
        method: "GET",
        url: url, 
        headers: {
            'x-rapidapi-key': '200ed2d1e4msh896c0d35ead630fp1010a6jsn3624536944fa',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };
    let response = await ajax(options)
    console.log("Clima",response.data)
    return response
}

export default getWeather