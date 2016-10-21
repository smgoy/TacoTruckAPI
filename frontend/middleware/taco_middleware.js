import { tacoConstants,
         receiveTacos } from '../actions/taco_actions';
import { requestTacos } from '../util/tacos_api_util';

const TacoMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case tacoConstants.REQUEST_TACOS: {
      const success = tacos => dispatch(receiveTacos(tacos));
      requestTacos(success, action.truckID);
      return next(action);
    }
  }
  return next(action);
};

export default TacoMiddleware;
