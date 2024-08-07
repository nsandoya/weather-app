import { ajax } from '../tools/ajax.js';

const getCities = async () => {
    const url = 'https://spott.p.rapidapi.com/places';
    const options = {
        method: 'GET',
        url: url,
        headers:{
            "X-RapidAPI-Key": "1910a52470msh958174fcc9d32e2p1d1e2djsna5cc8369e71f",
            "X-RapidAPI-Host": "spott.p.rapidapi.com"
        }
    }
    let response = await ajax(options)
    console.log(response)
    return response
}

getCities()

export default getCities