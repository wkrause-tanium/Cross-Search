import React from 'react';
import { ListView, Text, View } from 'react-native';
import styles from './SlackStyles.js';

const api_data = require('../../../static/data/slack_api.json');

class MessageRow extends React.Component {
  converDate(){
    const ts = this.props.msg.ts;
    const unixTS = Math.floor(parseFloat(ts) * 1000);
    const a = new Date(unixTS)
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  findQueryText() {
    const { query } = this.props;
    const { previous_2, previous, text, next, next_2 } = this.props.msg;
    const dataArray = [previous_2, previous, {text} , next, next_2];
    dataArray.forEach((d, i) => {
      if(d.attachments) {
        d.attachments.forEach((a) => {
          if (a.text && a.text.toLowerCase().includes(query)){
            console.log(a.text);
          }
          if (a.title && a.title.toLowerCase().includes(query)){
            console.log(a.title);
          }
        })
      }
      if (d.text.toLowerCase().includes(query)){
        console.log(dataArray[i]);
      }
    })
  }
  componentDidMount() {
    this.findQueryText();
  }
  render() {
    const { text, ts, username } = this.props.msg;
    return (
      <View style={styles.MessageRowContainer}>
        <View style={styles.MessageRow}>
          <Text>{username}</Text>
          <Text>{this.converDate()}</Text>
          <Text>{text}</Text>
        </View>
      </View>
    )
  }
}

class Slack extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(api_data.messages.matches),
    };
  }
  render() {
    return (
      <View style={styles.Slack}>
        <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <MessageRow key={rowData.iid} query={api_data.query} msg={rowData}/>}
          />
      </View>
    );
  }
}

export default Slack;
