import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Search: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SettingsFab: {
    position: 'absolute',
    top: 30,
    right: 20,
    backgroundColor: 'grey',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 3,
    shadowOpacity: 0.5
  }
});

export default styles
