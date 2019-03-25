import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";
import axios from 'axios'
import firebase from 'react-native-firebase'
import { Alert } from 'react-native'

//const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
//const API_KEY = 'AIzaSyDDOvkaiPvdaba5b32hsEMFO8sUY_DfK54'

export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}

export const createUser = user => {
    return dispatch => {
        firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .catch(err => console.log(err))
        .then(res => {
            Alert.alert('teste', JSON.stringify(res))
            console.log(res)
        })
        // axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
        //     email: user.email,
        //     password: user.password,
        //     returnSecureToken: true
        // })
        // .catch(err => console.log(err))
        // .then(res => {

        //     console.log(res);

        //     if(res.data.localId){
        //         axios.put(`/users/${res.data.localId}.json`, {
        //             name: user.name
        //         })
        //         .catch(err => console.log(errr))
        //         .catch(res => console.log('Usuário criado com sucesso'))
        //     }
        // })
    }
}