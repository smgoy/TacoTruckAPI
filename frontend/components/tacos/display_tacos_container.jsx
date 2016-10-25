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
  clearTacoErrors: type => dispatch(clearTacoErrors(type))
});

const mapStateToProps = state => ({
  newMessage: state.tacos.newMessage,
  editMessage: state.tacos.editMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTacos);
