import axios from 'axios';
import Cookies from 'js-cookie';

export const getPosts = () => dispatch => {
    //console.log("sup")
    const url = '/api/posts';
    axios.get(url)
        .then((response) =>
            dispatch({
                type: "getFeed",
                payload: response.data
            })
        ).catch(err => console.log(err))
}

export const deletePost = (postId) => dispatch => {
    const token = Cookies.get('tokenMERN');
    const header = {
        headers: { 'x-auth-token': token }
    }
    //console.log("delPost", postId, token)
    const url = `/api/posts/${postId}`
    axios.delete(url, header)
        .then(response => dispatch(getPosts()))
        .catch(err => console.log(err))
}

export const addPost = (postBody) => dispatch => {
    const token = Cookies.get('tokenMERN');
    const header = {
        headers: { 'x-auth-token': token }
    }
    //console.log(postBody, "addPost", header)
    const url = '/api/posts'
    axios.post(url, postBody, header)
        .then(response => dispatch(getPosts()))
        .catch(err => console.log(err))
}
