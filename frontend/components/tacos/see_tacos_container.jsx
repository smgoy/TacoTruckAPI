import { connect } from 'react-redux';
import SeeTacos from './see_tacos_button';
import { requestAllTrucks } from '../../actions/truck_actions';

const mapStateToProps = state => ({
  tacos: state.tacos.tacoData
});

export default connect(mapStateToProps, null)(SeeTacos);
