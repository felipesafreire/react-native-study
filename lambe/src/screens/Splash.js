import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class Splash extends Component {

    componentDidMount = () => {
        setTimeout(
            () => { this.props.navigation.navigate('App') },
            3000
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/imgs/icon.png')}
                    style={styles.image} />
                <Text style={styles.header}>
                    Lambe-Lambe
                </Text>
                <Text style={styles.text}>
                    Desenvolvido por Felipe Sá Freire
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    header: {
        fontSize: 30,
        padding: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        fontSize: 12,
        textAlign: 'center'
    }
})