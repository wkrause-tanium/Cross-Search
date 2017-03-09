import React from 'react';
import { Text, View } from 'react-native';
import styles from './LoginStyles';

import CustomTextInput from '../../../components/CustomTextInput';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.Login}><Text>Login</Text></View>
    );
  }
}

export default Login;
