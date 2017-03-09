import React from 'react';
import { Text, View } from 'react-native';
import styles from './<%= pascalEntityName %>Styles.js';

class <%= pascalEntityName %>  extends React.Component {
  render() {
    return (
      <View style={styles.<%= pascalEntityName %>}><Text><%= pascalEntityName %></Text></View>
    );
  }
}

export default <%= pascalEntityName %>;
