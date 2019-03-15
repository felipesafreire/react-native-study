import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar';

export default class Profile extends Component {

    logout = () => {
        this.props.navigation.navigate('Auth')
    }

    render() {

        const options = { email: 'felipesafreire@hotmail.com', secure: true };

        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar}></Gravatar>
                <Text style={styles.nickname}>Felipe Sá Freire</Text>
                <Text style={styles.email}>felipesafreire@hotmail.com</Text>
                <TouchableOpacity onPress={this.logout}
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Sair</Text>
                </TouchableOpacity>
            </View>
        )

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 30,
        fontSize: 10,
        fontWeight: 'bold'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: "#FFF"
    }
})