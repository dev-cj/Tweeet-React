import axios from 'axios';
//import { getPosts, hello } from './actionFeed';
export const initialState = {
    isLoggedIn: false,
    userName: "",
    updateRequired: false,
    posts: []
}

let hello = [];
const getPosts = () => {
    //const url = 'http://jsonplaceholder.typicode.com/posts';
    const url = 'http://localhost:3000/comments';
    axios.get(url).then(response => response.data)
        .then((data) => {
            //console.log(data);
            //let i = Object.keys(data).length -1
            //let i = Object.keys(data)
            //hello = new Array()
            //hello.splice(0, hello.length, ...data);
            hello.splice(0)
            for (let i = 0; i < data.length; i++) {
                hello.push(data[i])
            }
            //console.log(hello)
        })
}
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
            getPosts();
            //const sup = hello;
            //console.log(hello);
            //var num = Object.keys(hello)
            //console.log(Object.keys(hello).length)
            //let newArray = new Array()
            // for (let i = 0; i < hello.length; i++) {
            //      newArray.push(hello[i])
            // }
            let wow = [];
            wow = hello;
            //wow = [...wow,hello]
            //wow.splice(0)
            //console.log(Object.keys(wow).length)
            // for (let i = 0; i < hello.length; i++) {
            //     wow.push(hello[i])
            // }
            return {
                ...state,
                posts: wow
            }
            //,console.log(state.posts)
        }
        default: return state;
    }
}
export default reducer;