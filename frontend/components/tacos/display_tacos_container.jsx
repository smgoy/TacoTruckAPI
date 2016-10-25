import { connect } from 'react-redux';
import DisplayTacos from './display_tacos';
import { addTaco,
         deleteTaco,
         editTaco,
         clearTacoErrors } from '../../actions/taco_actions';

const mapDispatchToProps = dispatch => ({
  addTaco: tacoInfo => dispatch(addTaco(tacoInfo)),
  deleteTaco: id => dispatch(deleteTaco(id)),
  editTaco: (tacoID, taco) => dispatch(editTaco(tacoID, taco)),
  clearTacoErrors: () => dispatch(clearTacoErrors())
});

const mapStateToProps = state => ({
  message: state.tacos.message
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTacos);
