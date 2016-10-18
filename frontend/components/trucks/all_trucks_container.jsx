import { connect } from 'react-redux';
import TrucksButton from './all_trucks_button';
import { requestAllTrucks } from '../../actions/truck_actions';

const mapStateToProps = state => ({
  trucks: state.trucks
});

const mapDispatchToProps = dispatch => ({
  requestAllTrucks: () => dispatch(requestAllTrucks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrucksButton);
