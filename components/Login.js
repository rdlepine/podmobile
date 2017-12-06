import React, {Component} from 'react';
import {View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, ImageProperties, Image} from 'react-native';
import Orientation from 'react-native-orientation';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Content, Header, Footer, Container, Body, Card, CardItem, Button, Item } from 'native-base';

class Login extends Component {

    componentDidMount() {
        Orientation.lockToPortrait();
    }

    state = {
        driver: '',
        company: '',
        password: ''
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={{padding: 20, backgroundColor: '#ffffff'}}>
                <Image style={styles.logo} source={require('../assets/pod_logo.png')} />
            

                <Container>
                <Header style={{height: 40}} />
                <Content>
                  <Card>
                    <CardItem style={{flexDirection: 'column'}}>
                        <Text>Driver</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="user" size={25} />
                            <TextInput style={[styles.input, {flexGrow: 2}]}
                                autoCapitalize="none" 
                                onSubmitEditing={() => this.passwordInput.focus()} 
                                autoCorrect={false} 
                                keyboardType='email-address' 
                                returnKeyType="next" 
                                placeholder='' 
                                placeholderTextColor='#c0c0c0'/>
                         </View>
                    </CardItem>
                    <CardItem style={{flexDirection: 'column'}}>
                        <Text>Company #</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name="building" size={25} />
                            <TextInput style={[styles.input, {flexGrow: 2}]}   
                                returnKeyType="go" 
                                ref={(input)=> this.passwordInput = input} 
                                placeholder='' 
                                placeholderTextColor='#c0c0c0'
                                />
                         </View>
                    </CardItem>
                    <CardItem style={{flexDirection: 'column'}}>
                        <Text>Password</Text>
                        <View style={{flexDirection: 'row'}}>
                        <Icon name="key" size={25} />
                        <TextInput style={[styles.input, {flexGrow: 2}]}   
                            returnKeyType="go" 
                            ref={(input)=> this.passwordInput = input} 
                            placeholder='' 
                            placeholderTextColor='#c0c0c0'
                            secureTextEntry />
                     </View>
                </CardItem>
                    <CardItem footer>
                        <Button full block style={styles.menuButton}  onPress={() => navigate('Home')}>
                            <Text style={styles.menuButtonText}>LOGIN</Text>
                         </Button>
                    </CardItem>
                 </Card>
              
                </Content>
              </Container>
            </ScrollView>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
     container: {
     padding: 20
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000',
        fontSize: 18
    },
    buttonContainer:{
        marginTop: 20,
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    logo: {
        height: 30,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        height: 50,
        width: 270,
    },
    menuButton: {
        flexGrow: 2
    },
    menuButtonText: {
        color: '#ffffff',
    }
});    

export default Login