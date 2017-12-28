import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { getDispatches } from '../actions';
import { fetchDispatches, setDispatch } from '../actions';
import { connect } from 'react-redux';
import { Content, Container, Body, Card, CardItem, Button, Text, Input, Item } from 'native-base';
import { NavigationActions } from 'react-navigation';
import {lightBlue, blue, white, gray, lightGray } from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Orientation from 'react-native-orientation';
import Header from './Header';

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
        this.props.dispatches = this.props.dispatches.filter((dnum) => {
            let name = dnum.ship_name.toUpperCase();;
            if(name.indexOf(search) >= 0) {
                console.log(search);
                return dnum;
            }
        })
    }

    dispatchScreen = (dnum, event) => {
        const { navigate } = this.props.navigation;
        this.props.setDispatch(dnum);
        navigate('Dispatch', {title: `${dnum.dispatch_no}`});
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
            <Container style={styles.container}>
                <Header nav={navigate} navTo="Home" title="Dispatches" />
                <View style={styles.searchView}>
                    <TextInput style={styles.searchBox} onChangeText={this.setSearch.bind(this)} />
                    <Icon style={styles.icons} name="search" size={30} />
                </View>
                <ScrollView>           
                {dispatches !== undefined  ?
                    dispatches.map( (dispatch, key) => (
                        <View key={key}>
                            <TouchableOpacity onPress={this.dispatchScreen.bind(this, dispatch)} >    
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
                         </View>
                    ))
                    : 
                        <View>
                            <Text>{dispatches.length} Dispatches</Text>
                        </View>
                }
            </ScrollView>
            </Container>
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
    searchBox: {
       flex: 2,
       height: 50,
       marginLeft: 20,
       marginBottom: 10,
       marginRight: 10,
       height: 50,
       
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
    dispatch: {
        height: 140,
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
        alignItems: 'center',
    },
    header: {
        marginTop: 0,
        flexDirection: 'row',
        backgroundColor: white,
        borderColor: lightGray,
        borderBottomWidth: 2,
       
    }

})


const mapStateToProps = (state) => {
    return {
        dispatches: state.dispatches,
      
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDispatches: () => dispatch(fetchDispatches()),
        setDispatch: (dnum) => dispatch(setDispatch(dnum))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Dispatches);