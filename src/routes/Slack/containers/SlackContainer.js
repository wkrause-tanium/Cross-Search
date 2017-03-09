import { connect } from 'react-redux';
import { defaultActionFunction } from '../modules/Slack';

import Slack from '../components/Slack';

const mapActionCreators = {
  defaultActionFunction: () => defaultActionFunction(1),
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, mapActionCreators)(Slack);
