import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { getDispatches } from '../actions';
import { fetchDispatches } from '../actions';
import { connect } from 'react-redux';
import { Content, Container, Body, Card, CardItem, Button, Text, Input, Item } from 'native-base';
import { NavigationActions } from 'react-navigation';
import {lightBlue, blue, white, gray, lightGray } from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Orientation from 'react-native-orientation';

class Dispatches extends Component {

    componentDidMount() {
        this.fetchDispatches();
        Orientation.lockToPortrait();
       }

    fetchDispatches() {
        this.props.fetchDispatches();
    }

    setSearch = (event) => {
       
        let search = event.toUpperCase();
        this.props.dispatches = this.props.dispatches.filter((dispatch) => {
            let name = dispatch.ship_name.toUpperCase();;
            if(name.indexOf(search) >= 0) {
                console.log(search);
                return dispatch;
            }
        })
    }

    dispatchScreen = (dispatch) => {
        const { navigate } = this.props.navigation;
        navigate('Dispatch', {title: `Dispatch a`});
    }

    render() {

        const { dispatches } = this.props;
        const { navigate } = this.props.navigation;
        
        if(!dispatches) {
            return (
                <Text>No Dispatches</Text>
            )
        } 

        return (
            <View style={styles.container}>
                <View style={styles.searchView}>
                    <TextInput style={styles.searchBox} onChangeText={this.setSearch.bind(this)} />
                    <Icon style={styles.icons} name="search" size={30} />
                </View>
                <ScrollView >           
                {dispatches !== undefined  ?
                    dispatches.map( (dispatch, key) => (
                        <TouchableOpacity key={key} dnum={dispatch.dispatch_no} onPress={this.dispatchScreen.bind(dispatch)} >    
                            <View style={styles.dispatch}>
                                <Text style={[styles.dispatchItem]}>{dispatch.dispatch_no}</Text>
                                <Text style={[styles.dispatchItem]}>{dispatch.ship_name}</Text>
                                <Text style={[styles.dispatchItem]}>{dispatch.ship_addr1}</Text>
                                <Text style={[styles.dispatchItem]}>{dispatch.ship_addr2}</Text>
                                <Text style={[styles.dispatchItem]}>{dispatch.citystatezip}</Text>
                                <Text style={[styles.dispatchItem]}>{dispatch.phone}</Text>
                                <Text style={[styles.dispatchItem]}>{dispatch.readyclose}</Text>
                             </View>
                         </TouchableOpacity>
                    ))
                    : 
                        <View>
                            <Text>{dispatches.length} Dispatches</Text>
                        </View>
                }
            </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dispatches: state.dispatches,
      
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDispatches: () => dispatch(fetchDispatches()),
        setDispatch: (dispatch) => dispatch(setDispatch)
    };
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
    },
    searchView: {
        flexDirection: 'row',
        alignItems: 'stretch',
     
    },
    searchBox: {
       flex: 2,
       height: 50,
       marginLeft: 20,
       marginBottom: 10,
       marginRight: 10,
       height: 50,
       
    },
    icons: {
       marginRight: 10,
       marginTop: 10,
       color: blue
    },
    title: {
        fontSize: 32,
        fontStyle: 'italic',
        marginBottom: 10
    },
    headerText: {
        fontSize: 20,
        color: 'blue',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 5
    },
    dispatch: {
        height: 120,
        width: 300,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: lightGray,
        borderTopColor: gray,
        borderTopWidth: .5,
        borderLeftColor: gray,
        borderLeftWidth: .5,
        borderBottomColor: gray,
        borderRightColor: gray,
        borderBottomWidth: 2.5,
        borderRightWidth: 2.5,
        alignItems: 'center',
        paddingTop: 10

    },
    dispatchItem: {
        fontSize: 12,
        alignItems: 'center'
    },
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Dispatches);