import axios from "axios";
// Khởi tạo một instance của Axios với baseURL là https://jsonplaceholder.typicode.com
export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
// Hàm lấy danh sách bài viết (posts)
export const getPosts = async ()=> {
    const reponse = await api.get('/posts') // Gửi request GET tới endpoint /posts
}