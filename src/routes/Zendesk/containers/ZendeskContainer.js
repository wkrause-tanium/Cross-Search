import { connect } from 'react-redux';
import { defaultActionFunction } from '../modules/Zendesk';

import Zendesk from '../components/Zendesk';

const mapActionCreators = {
  defaultActionFunction: () => defaultActionFunction(1),
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, mapActionCreators)(Zendesk);
