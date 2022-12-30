import axios from "axios";
import AppUrl from "../component/api/AppUrl";

class userService {
    saveUser(user){
        return axios.post(AppUrl.Register, user)
    }
}

export default new userService();