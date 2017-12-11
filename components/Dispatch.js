import React, {Component} from 'react';
import {View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Header, Content, Button, Text, List, ListItem, Item, Input, Left, Right, Body, Switch, Badge } from 'native-base';
import {lightBlue, blue, white, gray, lightGray } from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Orientation from 'react-native-orientation';
import Header from './Header';
import { connect } from 'react-redux';

class Dispatch extends Component {

    static navigationOptions = ({ navigation }) => ({
           title: `Dispatch ${navigation.state.params.title}`,
           
    });

     componentDidMount() {
        Orientation.lockToPortrait();  
        this.props.navigation.setParams({
            onBackPress: this._handleBackPress
          });
    }

    _handleBackPress = () => {
        console.log("BACKKKKK");
      }

    state = {
        items: [],
        item: ''
    }

    addDispatchItem() {
        if(this.state.item.length === 0) return;
        let items = this.state.items;
        items.unshift({dispatch: this.state.item});
        this.setState({items: items});
        this.setState({item:''});
    }

    removeDispatchPrompt(dispatch, event) {
        Alert.alert(
            'Remove Item',
            `Remove Item ${dispatch}?`,
            [
              {text: 'Cancel', onPress: () => {return}},
              {text: 'OK', onPress: () =>  {this.removeDispatch(dispatch)}},
            ],
            { cancelable: false }
          )
    }

    removeDispatch(dispatch) {
       let items = this.state.items;

       items = items.filter( (item) => {
            return item.dispatch !== dispatch;
       });

       this.setState({items: items});

       this.refs.dispatch.focus();
    }

    resetItems() {
        Alert.alert(
            'Remove All Items',
            `Remove All Items?`,
            [
              {text: 'Cancel', onPress: () => {return}},
              {text: 'OK', onPress: () =>  {this.setState({items:[]})}},
            ],
            { cancelable: false }
          )
    }


    render() {

        const { items } = this.state;
        const { navigate } = this.props.navigation;
        return (
                <Container style={styles.container}>
                    <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigate('Dispatches')}>
                        <Icon style={styles.headerIcon} name="chevron-left" size={20} />
                    </TouchableOpacity>
                    <Text style={[styles.title, {flex: 2}]}>Dispatches</Text>   
                 </View> 
                <View style={{flexDirection: 'row'}}>
                    <Icon name="barcode" size={25} style={{marginTop: 10, marginLeft: 20}} />
                    <Text style={styles.headerText}>Scan/Enter Item</Text>
                </View>
                <View style={styles.content}>
                     <View style={styles.main}>
                        <View style={styles.input}>
                            <TextInput ref="dispatch" autoFocus={true} value={this.state.item} onChangeText={(item) => this.setState({item})} />
                         </View>
                        <Content>
                            <List>
                            { items.map( (item, key) => (
                                <ListItem key={key} icon>
                                <Left>
                                <Icon name="truck" size={25} />
                                </Left>
                                <Body>
                                <Text>{item.dispatch}</Text>
                                </Body>
                                <Right>
                                    <TouchableOpacity onPress={this.removeDispatchPrompt.bind(this, item.dispatch)}>
                                    <Badge danger >
                                        <Text>X</Text>
                                    </Badge>
                                    </TouchableOpacity>
                                </Right>
                            </ListItem>
                            ))  
                            }  
                            </List>
                        </Content>
                    </View>
                    <View style={styles.menu}>
                        <Button full block style={styles.menuButton} onPress={() => this.addDispatchItem()}>
                            <Text style={styles.menuText}>Add</Text>
                        </Button>
                        <Button full block style={styles.menuButton} onPress={() => this.setState({item: ''})}>
                            <Text style={styles.menuText}>Clear</Text>
                        </Button>
                        <Button full block style={styles.menuButton} onPress={() => this.resetItems()}>
                            <Text style={styles.menuText}>Reset</Text>
                        </Button>
                        <Button full block style={styles.menuButton}  onPress={() => navigate('Saved')}>
                            <Text style={styles.menuText}>Save</Text>
                        </Button>
                        <Button full block style={styles.menuButton}  onPress={() => navigate('Signature')}>
                            <Text style={styles.menuText}>Sign</Text>
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
      marginBottom: 15,
      alignSelf: 'center',
      width: 90,
      height: 35,
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 12
    },
    listButton: {
        height: 35,
        width: 35,
    },
    listButtonText: {
        fontSize: 10
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
        
    },
    headerIcon: {
        marginRight: 10,
        marginTop: 8,
        marginLeft: 10,
        color: blue,
        color: '#000',
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
        dnum: state.dispatch,
      
    };
};
   
 export default connect(mapStateToProps)(Dispatch);

