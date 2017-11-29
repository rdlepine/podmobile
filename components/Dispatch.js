import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Button, Text, List, ListItem, Item, Input, Left, Right, Body, Switch } from 'native-base';
import {lightBlue, blue, white, gray, lightGray } from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

class Dispatch extends Component {

    state = {
        items: [
            {
                dispatch: '1111111'
            },
            {
                dispatch: '2222222'
            },
            {
                dispatch: '3333333'
            },
            {
                dispatch: '4444444'
            },
            {
                dispatch: '5555555'
            },
            {
                dispatch: '6666666'
            },
            ,
           
        ]
    }

    render() {

        const { items } = this.state;

        return (
           <Container style={styles.container}>
                <Text style={styles.headerText}>Scan/Enter Item</Text>
                <View style={styles.content}>
                     <View style={styles.main}>
                        <Item style={styles.input}>
                            <Input placeholder='Scan/Enter here...' />
                         </Item>
                        <Content>
                            <List>
                            { items.map( (item) => (
                                <ListItem icon>
                                <Left>
                                <Icon name="truck" size={30} />
                                </Left>
                                <Body>
                                <Text>{item.dispatch}</Text>
                                </Body>
                                <Right>
                                <Switch value={false} />
                                </Right>
                            </ListItem>
                            ))  
                            }  
                            </List>
                        </Content>
                    </View>
                    <View style={styles.menu}>
                        <Button full block style={styles.menuButton} onPress={() => navigate('Dispatches')}>
                            <Text style={styles.menuText}>Add</Text>
                        </Button>
                        <Button full block style={styles.menuButton}  onPress={() => navigate('Saved')}>
                            <Text style={styles.menuText}>Save</Text>
                        </Button>
                        <Button full block style={styles.menuButton}  onPress={() => navigate('Saved')}>
                            <Text style={styles.menuText}>Upload</Text>
                        </Button>
                    </View>
                </View>
           </Container>
        )
    }
}

const styles =  StyleSheet.create({
    headerText: {
        paddingTop: 5,
        color: blue,
        fontSize: 22,
        marginLeft: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },
    menuButton: {
      marginTop: 10,
      alignSelf: 'center',
      width: 90,
      height: 35,
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 12
    },
    menuText: {
        fontSize: 12,
    },
    logo: {
        height: 30,
        marginTop: 20,
        height: 50,
        width: 270,
    },
    main: {
        flexGrow: 2,
    },
    input: {
        marginLeft: 20,
        marginRight: 20
    },
    list: {
        borderWidth: .5
        
    }
})


export default Dispatch;