import { ajax } from '../tools/ajax';

const getCountries = async () => {
    const url = 'https://restcountries.com/v3.1/all';
    const options = {
        method: 'GET',
        url: url,
    }
    let response = await ajax(options)
    console.log(response)
    return response
}

//getCities()

export default getCountries