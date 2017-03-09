import React from 'react';
import { Button, Text, View, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import styles from './SearchStyles.js';

import CustomTextInput from '../../../components/CustomTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';

function SettingsFab(props) {
  if (Platform.OS === 'android'){
    return (
      <TouchableNativeFeedback onPress={props.onPress} style={styles.SettingsFab}>
        {props.children}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.SettingsFab}>
      {props.children}
    </TouchableOpacity>
  );
}

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  handleSearchSubmit() {
    const { fetchSlack } = this.props;
    const { searchText } = this.state;
    fetchSlack(searchText);
    this.setState({searchText: ''});
  }
  renderSettingsFab() {
    if (Platform.OS === 'android'){
      <TouchableNativeFeedback />
    }
  }
  render() {
    const { globalSearch, lastSearchText, loginSearchText } = this.props;
    const { searchText } = this.state;
    return (
      <View style={styles.Search}>
        <CustomTextInput
          name={'searchText'}
          ref={(ref) => this.emailInputRef = ref}
          placeholder={'Search Text'}
          keyboardType={'default'}
          editable={true}
          color={'#900'}
          returnKeyType={'next'}
          blurOnSubmit={false}
          withRef={true}
          value={searchText}
          onChangeText={(value) => this.setState({ searchText: value })}
          isEnabled={true}
        />
        <Button
          onPress={this.handleSearchSubmit}
          title="Search"
          color={"#900"}
        />
        <Text>{lastSearchText}</Text>
        <Text>{loginSearchText}</Text>
        <SettingsFab onPress={() => globalSearch("test")}>
          <Icon name="cog" size={18} color="#FFFFFF" />
        </SettingsFab>
      </View>
    );
  }
}

Search.navigationOptions = {
    tabBar: ({ state, setParams }) => ({
      icon: (
        <Icon name="search" size={25} color="#900" />
      ),
    }),
  };

export default Search;
