import axios from "axios"
import { format } from 'date-fns';
import { es } from 'date-fns/locale'; // Importa el idioma español


const apiKey = "kVohzD4SvKMRGVSlqpTD1sJIbhSlflxP"

export const getGifs = async(category = "batman") => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=6`

    const response = await axios.get(url)
        //va un await porque eso me va a devolver una promesa
    const { data } = response.data;

    const gifs = data.map((gif) => {

        const tituloModificado = gif.title.replace(/GIF.*/i, "").trim();
        const fechaModificada = format(new Date(gif.import_datetime), 'd \'de\' MMMM\',\' yyyy', { locale: es });

        return {
            id: gif.id,
            title: tituloModificado,
            url: gif.images.downsized_medium.url,
            username: gif.username,
            date: fechaModificada,
        }

    })
    return gifs;

}