import { tacoConstants,
         receiveTacos,
         receiveTaco } from '../actions/taco_actions';
import { requestTacos,
         addTaco } from '../util/tacos_api_util';

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
  }
  return next(action);
};

export default TacoMiddleware;
