import { connect } from 'react-redux';
import DisplayTacos from './display_tacos';
import { addTaco,
         deleteTaco } from '../../actions/taco_actions';

const mapDispatchToProps = dispatch => ({
  addTaco: tacoInfo => dispatch(addTaco(tacoInfo)),
  deleteTaco: id => dispatch(deleteTaco(id))
});

export default connect(null, mapDispatchToProps)(DisplayTacos);
