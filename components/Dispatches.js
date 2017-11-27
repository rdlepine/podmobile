import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import * as api from '../utils/dispatchApi';
import { fetchDispatches } from '../actions';

class Dispatches extends Component {

    componentDidMount() {
        api.getDispatches();
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
                <ScrollView >           
                {this.props.dispatches !== undefined && Object.keys(this.props.dispatches).length > 0
                    ?
                        Object.keys(this.props.dispatches).map( (dispatch, key) => (
                                <Text>
                                    {dispatch.dispatch_no}
                                </Text>
                            ))      
                    : 
                        <View>
                            <Text>{Object.keys(this.props.decks).length} Cards</Text>
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

 export default Dispatches