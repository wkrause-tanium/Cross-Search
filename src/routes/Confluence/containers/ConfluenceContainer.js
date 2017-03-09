import { connect } from 'react-redux';
import { defaultActionFunction } from '../modules/Confluence';

import Confluence from '../components/Confluence';

const mapActionCreators = {
  defaultActionFunction: () => defaultActionFunction(1),
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

export default connect(mapStateToProps, mapActionCreators)(Confluence);
