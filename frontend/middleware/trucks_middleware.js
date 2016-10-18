import { truckConstants,
         receiveAllTrucks } from '../actions/truck_actions';
import { requestAllTrucks } from '../util/trucks_api_util';

const TruckMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case truckConstants.REQUEST_ALL_TRUCKS: {
      const success = (trucks) => dispatch(receiveAllTrucks(trucks));
      requestAllTrucks(success);
    }
  }
  return next(action);
};

export default TruckMiddleware;
