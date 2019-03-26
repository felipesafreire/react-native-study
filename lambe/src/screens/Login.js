import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'

class Login extends Component {

    state = {
        name: 'Temporario',
        email: '',
        password: ''
    }

    login = () => {
        this.props.onLogin({ ...this.state })
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Email"
                    style={styles.input}
                    onChangeText={email => this.setState({ email })}
                    autoFocus={true}
                    value={this.state.email}
                    keyboardType='email-address'>
                </TextInput>
                <TextInput placeholder="Senha"
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}>
                </TextInput>
                <TouchableOpacity onPress={this.login}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Criar nova conta</Text>
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
        borderColor: '#333'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
