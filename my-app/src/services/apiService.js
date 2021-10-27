import axios from "axios";
axios.defaults.baseURL= 'https://pixabay.com/api'
const API_KEY = '23129737-24f03c8dbe97b8724820f585e';


export function getPictures (query, page) {
    return axios.get(`/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.data.hits)
}