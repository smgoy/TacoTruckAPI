import { applyMiddleware } from 'redux';
import TruckMiddleware from './trucks_middleware';
import TacoMiddleware from './taco_middleware';

import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const MasterMiddleware = applyMiddleware(
  TruckMiddleware,
  TacoMiddleware,
  loggerMiddleware
);

export default MasterMiddleware;
