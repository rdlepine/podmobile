import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, ImageProperties, Image} from 'react-native';
import Orientation from 'react-native-orientation';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Content, Footer, Container, Body, Card, CardItem, Button, Item } from 'native-base';
import Header from './Header';

class Config extends Component {

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <Container style={styles.container}>
                <Header nav={navigate} navTo="Home" title="Config" />
            </Container>
        )
    }
}

// define your styles
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 0,
    },
  
});    

export default Config