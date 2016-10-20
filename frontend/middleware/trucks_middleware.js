import { truckConstants,
         receiveAllTrucks,
         receiveTruck,
         receiveErrors,
         removeTruck } from '../actions/truck_actions';
import { requestAllTrucks,
         addTruck,
         deleteTruck } from '../util/trucks_api_util';

const TruckMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case truckConstants.REQUEST_ALL_TRUCKS: {
      const success = trucks => dispatch(receiveAllTrucks(trucks));
      requestAllTrucks(success);
      return next(action);
    }
    case truckConstants.ADD_TRUCK: {
      const success = truck => dispatch(receiveTruck(truck));
      const error = errors => dispatch(receiveErrors(errors));
      addTruck(success, error, action.truck);
      return next(action);
    }
    case truckConstants.DELETE_TRUCK: {
      const success = truck => dispatch(removeTruck(truck));
      deleteTruck(success, action.id);
      return next(action);
    }
  }
  return next(action);
};

export default TruckMiddleware;
