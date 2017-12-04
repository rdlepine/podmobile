import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Orientation from 'react-native-orientation';

class Config extends Component {

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    render() {
        return (
            <View>
                <Text>Setup</Text>
            </View>
        )
    }
}


 export default Config