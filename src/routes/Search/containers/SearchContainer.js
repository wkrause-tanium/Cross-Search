import { connect } from 'react-redux';
import { globalSearch } from '../modules/Search';
import { fetchSlack } from '../../Slack/modules/Slack'

import Search from '../components/Search';

const mapActionCreators = {
  globalSearch,
  fetchSlack,
}

const mapStateToProps = (state) => ({
  lastSearchText: state.search.searchText,
  loginSearchText: state.login.searchText,
})

export default connect(mapStateToProps, mapActionCreators)(Search);
