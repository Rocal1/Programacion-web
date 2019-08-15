import axios from 'axios'

export const SHOW_USERS = 'SHOW_USERS'

export function showUsers() {
    
    return (dispatch, getState) => {
        //axios.get('http://jsonplaceholder.typicode.com/users')
        axios.get('https://rickywep.pythonanywhere.com/loshermanos/endpoint/api/Articulo.json')
        //axios.get('http://127.0.0.1:8000/losHermanos/endpoint/api/Articulo.json')
            .then((response) => {
                dispatch( { type: SHOW_USERS, payload: response.data.contenido } ) 
            })
    }
    
} 

