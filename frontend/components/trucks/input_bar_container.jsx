import { connect } from 'react-redux';
import { clearErrors } from '../../actions/truck_actions';
import InputBar from './input_bar';

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default connect(null, mapDispatchToProps)(InputBar);
