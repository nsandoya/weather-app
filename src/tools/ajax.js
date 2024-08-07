import axios from "axios";

            // AJAX: Asynchronous javascript and xml : Forma tradicional en que se realizan las peticiones asincrónicas en JS (sea que use fetch o axios)
export const ajax = async (options) => await axios.request(options)
    .then(response => {
        console.log("Respuesta desde ajax", response)
        return response
    });

