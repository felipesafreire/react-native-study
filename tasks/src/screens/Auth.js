import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import commonStyles from '../commonStyles';
import backgroundImage from '../../assets/imgs/login.jpg'
import AuthInput from '../components/AuthInput';

export default class Auth extends Component {

    state = {
        stageNew: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    signinOrSignup = () => {

        if (this.state.stageNew) {
            Alert.alert("Sucesso", 'Criar conta!');
        } else {
            Alert.alert("Sucesso", 'Logar!');
        }

    }

    render() {
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
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
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