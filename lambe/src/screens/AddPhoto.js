import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default class AddPhoto extends Component {

    state = {
        image: null,
        comment: ''
    }

    render() {
        return (
            <View></View>
        )
    }

}

const styles = StyleSheet.create({

})
