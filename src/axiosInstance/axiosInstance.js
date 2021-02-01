import axios from 'axios'

const instance = axios.create({
    baseURL : "https://burger-builder-5c0b0-default-rtdb.firebaseio.com"
})


export default instance