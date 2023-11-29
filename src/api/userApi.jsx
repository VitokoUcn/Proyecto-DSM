import axios from 'axios';

const baseURL = 'http://10.0.2.2:8000/api';

const userApi = axios.create({ baseURL });


export default userApi