import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Orientation from 'react-native-orientation';

class Activities extends Component {

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}


 export default Activities