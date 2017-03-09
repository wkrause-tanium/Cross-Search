import { connect } from 'react-redux';
import { defaultActionFunction } from '../modules/Jira';

import Jira from '../components/Jira';

const mapActionCreators = {
  defaultActionFunction: () => defaultActionFunction(1),
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, mapActionCreators)(Jira);
