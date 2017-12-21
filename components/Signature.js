import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';
import { NavigationActions } from 'react-navigation';

class Signature extends Component {  

    _onPressClose() {
        this.show(false);
      }
    
    _onRequreClose() {
        this.show(false);
    }
    
     _onDragEvent() {
        // This callback will be called when the user enters signature
       console.log("dragged");
    }

    _onSaveEvent(result) {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        const { navigate } = this.props.navigation;
        result.viewMode="portrait";
        this.props.onSave && this.props.onSave(result);
        navigate('Dispatch', {title: ""});
     }

    render() {

  
        return (
            <View style={{flex: 1, width: '100%'}}>
                <SignatureCapture
                    style={{flex: 1, width: '100%'}}
                    viewMode="landscape"
                    showTitleLabel={true}
                    onDragEvent={this._onDragEvent.bind(this)}
                    onSaveEvent={this._onSaveEvent.bind(this)}
                />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
    },
    buttonStyle: {
        flex: 1, justifyContent: "center", alignItems: "center", height: 50,
        backgroundColor: "#eeeeee",
        margin: 10
    }
});

export default Signature;