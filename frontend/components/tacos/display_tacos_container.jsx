import { connect } from 'react-redux';
import DisplayTacos from './display_tacos';
import { addTaco,
         deleteTaco,
         editTaco } from '../../actions/taco_actions';

const mapDispatchToProps = dispatch => ({
  addTaco: tacoInfo => dispatch(addTaco(tacoInfo)),
  deleteTaco: id => dispatch(deleteTaco(id)),
  editTaco: (tacoID, taco) => dispatch(editTaco(tacoID, taco))
});

export default connect(null, mapDispatchToProps)(DisplayTacos);
