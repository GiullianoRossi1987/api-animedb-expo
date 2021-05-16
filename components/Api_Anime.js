import axios from "axios";

const Api_Anime = axios.create({
    baseURL: "https://simpleanime.p.rapidapi.com/",
    headers: {
        'x-rapidapi-key': '924f1a0ac3msha24794b35d273cap103bc9jsnbe3dcbfb42d3',
        'x-rapidapi-host': 'simpleanime.p.rapidapi.com'
    }
});

export default Api_Anime;
