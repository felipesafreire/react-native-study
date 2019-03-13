import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddComment extends Component {

    state = {
        comment: '',
        editMode: false
    }

    handlerComment = () => {
        Alert.alert('Adicionado', this.state.comment)
    }

    render() {

        let commentArea = null;
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput placeholder="Pode comentar..."
                        style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onSubmitEditing={this.handlerComment}
                        onChangeText={comment => this.setState({ comment })}></TextInput>
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name='times' size={15} color='#555'></Icon>
                    </TWF>
                </View>
            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555'></Icon>
                        <Text style={styles.caption}>
                            Adicione um comentário...
                        </Text>
                    </View>
                </TWF>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input: {
        width: '90%'
    }
})