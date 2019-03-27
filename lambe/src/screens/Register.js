import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user';

class Register extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.setState({ name: '', email: '', password: '' })
            this.props.navigation.navigate('Feed')
        }
    }

    createUser = () => {
        if (this.state.name === '' || this.state.email === '' || this.state.password === '') {
            Alert.alert("Erro", "Todos os campos são obrigatórios.")
            return;
        }
        if (this.state.password.length < 6) {
            Alert.alert("Erro", "Senha deve conter no mínimo 6 caracteres");
            return;
        }
        this.props.onCreateUser(this.state);
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
                <TouchableOpacity
                    onPress={this.createUser}
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

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToprops = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Register)