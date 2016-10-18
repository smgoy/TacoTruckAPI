import { applyMiddleware } from 'redux';
import TruckMiddleware from './trucks_middleware';

import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const MasterMiddleware = applyMiddleware(
  TruckMiddleware,
  loggerMiddleware
);

export default MasterMiddleware;
