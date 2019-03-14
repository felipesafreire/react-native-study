import React, { Component } from 'react'
import {
    StyleSheet, FlatList, View
} from 'react-native'
import Header from '../components/Header';
import Post from '../components/Post';

export default class Feed extends Component {

    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafaeldsda@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [
                { nickname: 'Josh Ray Scheldon', comment: 'Lega!!!!' },
                { nickname: 'Ana Julia', comment: 'Legal hein fera!' },
            ],
        }, {
            id: Math.random(),
            nickname: 'Francisco Oliveira Filho',
            email: 'francisco@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: []
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item}></Post>}>
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F5FCFF"
    }
})