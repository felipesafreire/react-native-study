import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOADING_USER,
    USER_LOADED
} from "./actionTypes";
import axios from 'axios'
import { setMessage } from './message'
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
        dispatch(loadingUser())
        firebase.auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .catch(() => dispatch(setMessage({ title: 'Erro', text: "Erro ao criar o usuario." })))
            .then(res => {
                if (res.user.uid) {
                    axios.put(`/users/${res.user.uid}.json`, {
                        name: user.name
                    })
                        .catch(() => dispatch(setMessage({ title: 'Erro', text: "Erro ao criar o usuario." })))
                        .then(() => {
                            dispatch(login(user))
                        })
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
            .catch(() => dispatch(setMessage({ title: 'Erro', text: "E-mail ou senha invalida." })))
            .then(result => {
                let dataUser = result;
                firebase.auth()
                    .currentUser.getIdToken()
                    .catch(() => dispatch(setMessage({ title: 'Erro', text: "Erro ao obter informações do usuário." })))
                    .then(res => {
                        user.token = res
                        axios.get(`/users/${dataUser.user.uid}.json`)
                            .catch(() => dispatch(setMessage({ title: 'Erro', text: "Erro ao obter informações do usuário." })))
                            .then(res => {
                                delete user.password
                                user.name = res.data.name
                                dispatch(userLogged(user))
                                dispatch(userLoaded())
                            })
                    })
            })
    }
}