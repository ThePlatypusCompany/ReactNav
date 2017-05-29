'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Button
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import styles from './Styles.js';

class ReactNav extends Component {
  render() {
    return (
      <DrawerNav/>
    );
  }
}

class GreenScreen extends Component {
  static navigationOptions = {
    title: 'Green',
  }
  render() {
    return(
      <View style={styles.green}>
        <Text style={styles.text}>This is the Green Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Red')}
        >
          <Text style={styles.text}>Go to Red</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Text style={styles.text}>Open Drawer</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class RedScreen extends Component {
  render() {
    return(
      <View style={styles.red}>
        <Text style={styles.text}>This is the Red Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.text}>Back to Green</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Text style={styles.text}>Open Drawer</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

RedScreen.navigationOptions = props => {
  const { navigation } = props;
  return {
    headerTitle: 'Red',
    headerRight: (<Button title='Purple' onPress={() => navigation.navigate('Purple')}/>),
    headerLeft: (<Button title='Blue' onPress={() => navigation.navigate('Blue')}/>)
  }
}

class BlueScreen extends Component {
  static navigationOptions = {
    title: 'Blue',
  }
  render() {
    return(
      <View style={styles.blue}>
        <Text style={styles.text}>This is the Blue Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Text style={styles.text}>Open Drawer</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class PurpleScreen extends Component {
  static navigationOptions = {
    title: 'Purple',
  }
  render() {
    return(
      <View style={styles.purple}>
        <Text style={styles.text}>This is the Purple Screen</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
        >
          <Text style={styles.text}>Open Drawer</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const StackNav = StackNavigator({
  Green: { screen: GreenScreen },
  Red: { screen: RedScreen },
  Blue: { screen: BlueScreen },
  Purple: { screen: PurpleScreen }
})

const TabNav = TabNavigator(
  {
    Green: { screen: GreenScreen },
    Red: { screen: RedScreen },
    Blue: { screen: BlueScreen },
    Purple: { screen: PurpleScreen }
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
        marginBottom: 10
      }
    }
  }
)

const DrawerNav = DrawerNavigator({
  Green: { screen: GreenScreen },
  Red: { screen: RedScreen },
  Blue: { screen: BlueScreen },
  Purple: { screen: PurpleScreen }
})

AppRegistry.registerComponent('ReactNav', () => ReactNav);
