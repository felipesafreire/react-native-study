import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from "./actionTypes";
import axios from 'axios'
import firebase from 'react-native-firebase'

export const userLogged = user => {
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
                if (res.user.uid) {
                    axios.put(`/users/${res.user.uid}.json`, {
                        name: user.name
                    })
                        .catch(err => console.log(errr))
                        .then(res => console.log('Usuário criado com sucesso'))
                }
            })
    }
}

export const loadingUser = () => {
    return {
        type: LOADING_USER
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED
    }
}

export const login = user => {
    return dispatch => {
        dispatch(loadingUser())
        firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .catch(err => console.log(err))
            .then(res => {
                if (res.user.uid) {
                    axios.get(`/users/${res.user.uid}.json`)
                        .catch(err => console.log(err))
                        .then(res => {
                            user.password = null
                            user.name = res.data.name
                            dispatch(userLogged(user))
                            dispatch(userLoaded())
                        })
                }
            })
    }
}