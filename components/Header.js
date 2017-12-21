import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Content, Container, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import {lightBlue, blue, white, gray, lightGray } from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component {

  

    render() {

        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.nav(this.props.navTo)}>
                    <Icon style={styles.headerIcon} name="arrow-left" size={20} />
                </TouchableOpacity>
                <Text style={[styles.title, {flex: 2}]}>{this.props.title}</Text>   
            </View> 
         )
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 0,
    },
    searchView: {
        flexDirection: 'row',
        alignItems: 'stretch',
     
    },
    headerIcon: {
       marginRight: 10,
       marginTop: 8,
       marginLeft: 10,
       color: blue,
       color: '#000',
    },
    title: {
        fontSize: 22,
        marginBottom: 10,
        color: 'blue',
        fontWeight: '400',
    },
    headerText: {
        fontSize: 18,
        color: 'blue',
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 5
    },
    header: {
        marginTop: 0,
        flexDirection: 'row',
        backgroundColor: white,
        borderColor: lightGray,
        borderBottomWidth: 2,
       
    }

})

export default Header;