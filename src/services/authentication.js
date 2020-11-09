import axios from 'axios'
export const addToDos = (data) => {
    console.log('hi',data)
    return axios.request({
        method: 'POST',
        url: 'http://localhost:8000/posts',
        headers: {
            'Access-Control-Allow-Origin': '*',
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        params: data
    }).then(response => (
        response.data
    ))
}