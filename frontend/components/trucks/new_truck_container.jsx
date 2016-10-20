import { connect } from 'react-redux';
import { addTruck } from '../../actions/truck_actions';
import NewTruckForm from './new_truck';

const mapStateToProps = state => ({
  message: state.trucks.message
});

const mapDispatchToProps = dispatch => ({
  addTruck: truck => dispatch(addTruck(truck))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTruckForm);
