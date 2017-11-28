import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import { getDispatches } from '../actions';
import { fetchDispatches } from '../actions';
import { connect } from 'react-redux';
import { Content, Container, Body, Card, CardItem, Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

class Dispatches extends Component {

    componentDidMount() {
       this.props.fetchDispatches();
    }


    dispatchSelected = (event) => {
        console.log("in");
        const { navigate } = this.props.navigation;
        navigate('Home');
    }

    render() {

        const { dispatches } = this.props;
        
        if(!dispatches) {
            return (
                <Text>No Dispatches</Text>
            )
        } 


        return (
            <View>
                <Text style={styles.headerText}>Dispatches</Text>
                <ScrollView >           
                {dispatches !== undefined  ?
                    dispatches.map( (dispatch, key) => (
                        <View key={key}>
                            <Content>
                                <Card   style={[{flex:0}]} >
                                        <CardItem>
                                            <Body onPress={this.dispatchSelected.bind(this)}>
                                                <Text>{dispatch.dispatch_no}</Text>
                                                <Text>{dispatch.ship_name}</Text>
                                                <Text>{dispatch.ship_addr1}</Text>
                                            </Body>
                                        </CardItem>
                                </Card>
                            </Content>
                        </View>
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
    headerText: {
        fontSize: 20,
        color: 'blue',
        fontWeight: '600',
        textAlign: 'center'
    },
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Dispatches);