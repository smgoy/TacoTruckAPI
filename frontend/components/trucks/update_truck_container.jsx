import { connect } from 'react-redux';
import UpdateDeleteTruck from './update_delete_truck';
import { deleteTruck,
         updateTruck } from '../../actions/truck_actions';
import { requestTacos } from '../../actions/taco_actions';

const mapStateToProps = state => ({
  trucks: state.trucks
});

const mapDispatchToProps = dispatch => ({
  deleteTruck: id => dispatch(deleteTruck(id)),
  updateTruck: (id, name) => dispatch(updateTruck(id, name)),
  requestTacos: truckID => dispatch(requestTacos(truckID))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDeleteTruck);
