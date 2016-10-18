import { applyMiddleware } from 'redux';


import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const MasterMiddleware = applyMiddleware(
  loggerMiddleware
);

export default MasterMiddleware;
