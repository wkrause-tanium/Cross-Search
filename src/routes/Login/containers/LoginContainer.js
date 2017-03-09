import { connect } from 'react-redux';
import { defaultActionFunction } from '../modules/Login';

import Login from '../components/Login';

const mapActionCreators = {
  defaultActionFunction: () => defaultActionFunction(1),
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, mapActionCreators)(Login);
