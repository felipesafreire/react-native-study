import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Gravatar } from 'react-native-gravatar';

class Profile extends Component {

    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {

        const options = { email: this.props.email, secure: true };

        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar}></Gravatar>
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
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
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    email: {
        marginTop: 30,
        fontSize: 20
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

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispacthToProps = dispatch => {
    return {
        onLogout: () =>  dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Profile);
