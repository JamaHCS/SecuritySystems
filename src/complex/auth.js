/* eslint-disable quotes */
import axios from 'axios';
import { URL } from '../js/constants';

export default {
    login(email, password) {
        const user = { email, password };
        return axios.post(`http://localhost:8000/api/login`, user);
    }
};
