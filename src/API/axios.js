import axios from "axios";
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
export const getPosts = async ()=> {
    const reponse = await api.get('/posts')
}