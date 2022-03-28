/* eslint-disable quotes */
import axios from 'axios';
import { URL } from '../js/constants';
import Cookies from 'js-cookie';

export default {
    setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
    },
    getUserLogged() {
        return Cookies.get("userLogged");
    },
    login(email, password) {
        const user = { email, password };
        return axios.post(`${URL}api/login`, user);
    }
};
