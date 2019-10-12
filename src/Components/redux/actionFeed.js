import axios from 'axios';
export const getPosts = () => dispatch => {
    console.log("sup")
    const url = 'http://localhost:3000/comments';
    axios.get(url)
        .then(response => response.data)
        .then((data) =>
            dispatch({
                type: "getFeed",
                payload: data
            })
        )
}

