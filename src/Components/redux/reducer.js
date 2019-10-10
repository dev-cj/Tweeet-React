//import axios from 'axios';
import { getPosts, hello } from './actionFeed';
const initialState = {
    isLoggedIn: false,
    userName: "",
    updateRequired: false,
    posts: []
}
// const getPosts = () => {
//     const url = 'http://localhost:3000/comments';
//     axios.get(url).then(response => response.data)
//         .then((data) => {
//             return {
//                 ...state,
//                 posts: data
//             };
//         })
// }

// const getPosts = (state) => {
//     const url = 'http://localhost:3000/comments';
//     axios.get(url).then(response => response.data)
//         .then((data) => {
//             return {
//                 ...state,
//                 posts: data
//             }
//         })
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "loggedIn": {
            return {
                ...state,
                userName: action.payload,
                isLoggedIn: true
            }
        }
        case "loggedOut": {
            return {
                ...state,
                userName: action.payload,
                isLoggedIn: false
            }
        }
        case "getFeed": {
            getPosts(state);
            let sup = hello.slice(0)
            return state = {
                ...state,
                posts: sup
            }
            //,console.log(state.posts)
        }
        default: return state;
    }

}
export default reducer;