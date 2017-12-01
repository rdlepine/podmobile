
import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Button, Text } from 'native-base';

class Home extends Component {

    goWhere = (whereTo, event) => {
       
        const { navigate } = this.props.navigation;
        switch(whereTo) {
            case 'Dispatches':
                navigate('Dispatches');
                break;
            default:
                break;
        }
    }

    render() {
        
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/pod_logo.png')} />
                <Button full block style={styles.menuButton} onPress={() => navigate('Dispatches')}>
                    <Text>Dispatches</Text>
                </Button>
                <Button full block style={styles.menuButton}  onPress={() => navigate('Saved')}>
                    <Text>Saved</Text>
                </Button>
                <Button full block style={styles.menuButton}  onPress={() => navigate('Config')}>
                   <Text>Setup</Text>
                </Button>
                <Button full block style={styles.menuButton}  onPress={() => navigate('Dispatches')}>
                    <Text>Exit</Text>
                </Button>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    
    },
    menuButton: {
      marginTop: 10,
      alignSelf: 'center',
      width: 230,
      borderRadius: 10
    },
    logo: {
        height: 30,
        marginTop: 20,
        height: 50,
        width: 270,
    }
})


 export default Home