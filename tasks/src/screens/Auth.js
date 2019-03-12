import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import commonStyles from '../commonStyles';
import backgroundImage from '../../assets/imgs/login.jpg'
import AuthInput from '../components/AuthInput';
import axios from 'axios';
import { server, showError } from '../common'


export default class Auth extends Component {

    state = {
        stageNew: false,
        name: '',
        email: '@',
        password: '',
        confirmPassword: ''
    }

    signin = async () => {

        axios.post(`${server}/signin`, {
            email: this.state.email,
            password: this.state.password,
        }).then(result => {
            axios.defaults.headers.common['Authorization'] = `bearer ${result.data.token}`
            this.props.navigation.navigate('Home', result.data)
        }).catch(() => { Alert.alert("Erro", 'Usuário e senha inválidos.') })

    }

    signup = async () => {

        try {

            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            })

            Alert.alert('Sucesso!', "Usuário cadastrado :)")
            this.setState({ stageNew: false })

        } catch (err) {
            showError(err)
        }

    }

    signinOrSignup = () => {

        if (this.state.stageNew) {
            this.signup()
        } else {
            this.signin()
        }

    }

    render() {

        const validations = [];
        validations.push(this.state.email && this.state.email.includes('@'));
        validations.push(this.state.password && this.state.password.length >= 3);

        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim());
            validations.push(this.state.confirmPassword);
            validations.push(this.state.password === this.state.confirmPassword);
        }

        const validForm = validations.reduce((all, v) => all && v);

        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tarefas</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 'Criar a sua Conta' : 'Informe seus dados'}
                    </Text>
                    {this.state.stageNew &&
                        <AuthInput icon='user' placeholder="Nome"
                            style={styles.input}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}></AuthInput>}
                    <AuthInput icon='at' placeholder="E-mail"
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}></AuthInput>
                    <AuthInput icon='lock' secureTextEntry={true}
                        placeholder="Senha"
                        style={styles.input}
                        value={this.state.senha}
                        onChangeText={password => this.setState({ password })}></AuthInput>
                    {this.state.stageNew &&
                        <AuthInput icon='asterisk' secureTextEntry={true}
                            placeholder="Confirmação"
                            style={styles.input}
                            value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}></AuthInput>}
                    <TouchableOpacity disabled={!validForm} onPress={this.signinOrSignup}>
                        <View style={[styles.button, !validForm ? { backgroundColor: '#AAA' } : {}]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?' : 'Não possui conta?'}
                    </Text>
                </TouchableOpacity>
            </ImageBackground >
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: "#FFF",
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: "#FFF",
        fontSize: 20
    },
    formContainer: {
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 20,
        width: '90%'
    },
    input: {
        marginTop: 10,
        backgroundColor: "#FFF"
    },
    button: {
        backgroundColor: "#080",
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 20
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: "#FFF"
    }
})