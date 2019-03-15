import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

export default class Register extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Nome"
                    style={styles.input}
                    onChangeText={name => this.setState({ name })}
                    autoFocus={true}
                    value={this.state.name}>
                </TextInput>
                <TextInput placeholder="Email"
                    style={styles.input}
                    onChangeText={email => this.setState({ email })}
                    keyboardType={'email-address'}
                    value={this.state.email}>
                </TextInput>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}>
                </TextInput>
                <TouchableOpacity onPress={() => { }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
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
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: "#FFF"
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})