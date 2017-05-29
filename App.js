'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import styles from './Styles.js';

class ReactNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

class GreenScreen extends Component {
  render() {
    return(
      <View style={styles.green}>
        <Text style={styles.text}>This is the Green Screen</Text>
      </View>
    );
  }
}

class RedScreen extends Component {
  render() {
    return(
      <View style={styles.red}>
        <Text style={styles.text}>This is the Red Screen</Text>
      </View>
    );
  }
}

class BlueScreen extends Component {
  render() {
    return(
      <View style={styles.blue}>
        <Text style={styles.text}>This is the Blue Screen</Text>
      </View>
    );
  }
}

class PurpleScreen extends Component {
  render() {
    return(
      <View style={styles.purple}>
        <Text style={styles.text}>This is the Purple Screen</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNav', () => ReactNav);
