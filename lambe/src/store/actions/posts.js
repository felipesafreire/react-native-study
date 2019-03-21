import { SET_POSTS, ADD_COMMENT } from "./actionTypes";
import axios from 'axios'

export const addPost = post => {
    return dispatch => {
        axios({
            url: 'uploadImage',
            baseURL: 'https://us-central1-lambe-df1e8.cloudfunctions.net/',
            method: 'post',
            data: {
                image: post.image.base64
            }
        }).then(err => {
            post.image = err.data.imageUrl
            axios.post('/posts.json', { ...post })
                .then(res => console.log(res))
                .catch(err => console.error(err))

        }).catch(err => console.log(err))
    }
}

export const addComment = payload => {
    return {
        type: ADD_COMMENT,
        payload
    }
}

export const setPosts = posts => {
    return {
        type: ADD_COMMENT,
        payload: posts
    }
}

export const fetchPosts = () => {
    return dispatch => {
        axios.get('/post.json')
            .catch(err => console.log(err))
            .then(res => {
                const rawPosts = res.data;
                const posts = [];
                for (let key in rawPosts) {
                    posts.push({
                        ...rawPosts[key],
                        id: key
                    })
                }
                dispatch(setPosts(posts))
            })
    }
}