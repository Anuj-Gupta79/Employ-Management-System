import axios from "axios";

const BASE_URL = "http://localhost:8080/user/";

class UserService{
    saveUser(user){
        return axios.post(BASE_URL + "create", user);
    }

    loginUser(user){
        return axios.post(BASE_URL + "login", user);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();