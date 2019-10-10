import axios from 'axios';
export let hello;
export const getPosts = (state) => {
    const url = 'http://localhost:3000/comments';
    axios.get(url).then(response => response.data)
        .then((data) => {
            console.log(data);
            //let i = Object.keys(data).length -1
            //let i = Object.keys(data)
            hello = new Array()
            
            //hello.splice(0, hello.length, ...data);
            for (let i = 0; i < data.length; i++) {
                 hello.push(data[i])
            }
            console.log(hello)
        })
    
}


