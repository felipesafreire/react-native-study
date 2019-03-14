import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Image
} from 'react-native'
import Autor from './Autor';
import Comments from './Comments';
import AddComment from './AddComment';

export default class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image}></Image>
                <Autor email={this.props.email} nickname={this.props.nickname}></Autor>
                <Comments comments={this.props.comments}></Comments>
                <AddComment></AddComment>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})