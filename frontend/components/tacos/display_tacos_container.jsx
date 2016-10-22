import { connect } from 'react-redux';
import DisplayTacos from './display_tacos';
import { addTaco } from '../../actions/taco_actions';

const mapDispatchToProps = dispatch => ({
  addTaco: tacoInfo => dispatch(addTaco(tacoInfo))
});

export default connect(null, mapDispatchToProps)(DisplayTacos);
