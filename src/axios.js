import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://roompoolapi.herokuapp.com/",
    withCredentials: false,
    headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
      }
});

export default Axios;