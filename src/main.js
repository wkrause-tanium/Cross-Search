import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Provider } from 'react-redux'
import { TabNavigator } from 'react-navigation';  

import Confluence from './routes/Confluence/containers/ConfluenceContainer';
import Jira from './routes/Jira/containers/JiraContainer';
import Search from './routes/Search/containers/SearchContainer';
import Slack from './routes/Slack/containers/SlackContainer';
import Zendesk from './routes/Zendesk/containers/ZendeskContainer';

import createStore from './store/createStore'

const store = createStore()

const MyApp = TabNavigator({
  Jira: {
    screen: Jira,
  },
  Confluence: {
    screen: Confluence,
  },
  Search: {
    screen: Search,
  },
  Slack: {
    screen: Slack,
  },
  Zendesk: {
    screen: Zendesk,
  },
}, {
  initialRouteName: 'Slack',
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


class CrossSearch extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F7FA',
    padding: 20,
  },
  logoImage: {
    width: 200,
  },
  hr: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
  },
  inputStyle: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});

export default CrossSearch;
