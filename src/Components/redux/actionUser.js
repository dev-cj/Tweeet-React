import axios from 'axios';
import Cookies from 'js-cookie';

let token = Cookies.get('tokenMERN');
export const confirmLogin = (login) => dispatch => {
    const url = 'api/auth/user'
    const header = {
        headers: { 'x-auth-token': token || login }
    }
    if (login || token) {
        //console.log(login, "blah", token)
        axios.get(url, header)
            .then((response) =>
                dispatch({
                    type: "loggedIn",
                    payload: response.data.name
                })
            )
    } else {
        dispatch({
            type: "loggedOut",
            payload: "Guest"
        })
    }
}
