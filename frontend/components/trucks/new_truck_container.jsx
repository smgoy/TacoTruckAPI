import { connect } from 'react-redux';
import { addTruck } from '../../actions/truck_actions';
import NewTruckForm from './new_truck';

const mapDispatchToProps = dispatch => ({
  addTruck: truck => dispatch(addTruck(truck))
});

export default connect(null, mapDispatchToProps)(NewTruckForm);
