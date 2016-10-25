import { applyMiddleware } from 'redux';
import TruckMiddleware from './trucks_middleware';
import TacoMiddleware from './taco_middleware';


const MasterMiddleware = applyMiddleware(
  TruckMiddleware,
  TacoMiddleware
);

export default MasterMiddleware;
