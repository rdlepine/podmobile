import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, ImageProperties, Image} from 'react-native';
import Orientation from 'react-native-orientation';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Content, Header, Footer, Container, Body, Card, CardItem, Button, Item } from 'native-base';

class Config extends Component {

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text>Config</Text>
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
     container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        marginTop: 20,
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        height: 30,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 50,
        width: 270,
    },
    menuButton: {
        flexGrow: 2
    },
    menuButtonText: {
        color: '#ffffff',
    }
});    

export default Config