import { tacoConstants,
         receiveTacos,
         receiveTaco,
         removeTaco } from '../actions/taco_actions';
import { requestTacos,
         addTaco,
         deleteTaco,
         editTaco } from '../util/tacos_api_util';

const TacoMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case tacoConstants.REQUEST_TACOS: {
      const success = tacos => dispatch(receiveTacos(tacos));
      requestTacos(success, action.truckID);
      return next(action);
    }
    case tacoConstants.ADD_TACO: {
      const success = taco => dispatch(receiveTaco(taco));
      addTaco(success, (error) => console.log(error), action.tacoInfo);
      return next(action);
    }
    case tacoConstants.DELETE_TACO: {
      const success = taco => dispatch(removeTaco(taco));
      deleteTaco(success, action.id);
      return next(action);
    }
    case tacoConstants.EDIT_TACO: {
      const success = taco => dispatch(receiveTaco(taco));
      editTaco(success, (error) => console.log(error), action.tacoID, action.taco);
      return next(action);
    }
  }
  return next(action);
};

export default TacoMiddleware;
