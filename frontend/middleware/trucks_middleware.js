import { truckConstants,
         receiveAllTrucks,
         receiveTruck } from '../actions/truck_actions';
import { requestAllTrucks,
         addTruck } from '../util/trucks_api_util';

const TruckMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case truckConstants.REQUEST_ALL_TRUCKS: {
      const success = trucks => dispatch(receiveAllTrucks(trucks));
      requestAllTrucks(success);
      return next(action);
    }
    case truckConstants.ADD_TRUCK: {
      const success = truck => dispatch(receiveTruck(truck));
      addTruck(success, ()=>console.log('error'), action.truck);
      return next(action);
    }
  }
  return next(action);
};

export default TruckMiddleware;
