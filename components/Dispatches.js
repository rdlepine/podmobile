import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { getDispatches } from '../actions';
import { fetchDispatches } from '../actions';
import { connect } from 'react-redux';
import { Content, Container, Body, Card, CardItem, Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import {lightBlue, blue, white, gray, lightGray } from '../utils/colors';

class Dispatches extends Component {

    componentDidMount() {
       this.props.fetchDispatches();
    }


    dispatchSelected = (event) => {
        const { navigate } = this.props.navigation;
        navigate('Dispatch');
    }

    render() {

        const { dispatches } = this.props;
        
        if(!dispatches) {
            return (
                <Text>No Dispatches</Text>
            )
        } 


        return (
            <View style={styles.container}>
                <ScrollView >           
                {dispatches !== undefined  ?
                    dispatches.map( (dispatch, key) => (
                        <TouchableOpacity key={key} onPress={this.dispatchSelected.bind(this)}>    
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
    };
};

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
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