import React from 'react';
import { Provider } from 'react-redux';
import ShowTrucks from './components/all_trucks_button';
import NewTruck from './components/new_truck';
import UpdateDeleteTruck from './components/update_delete_truck';


const App = ({store}) => (
  <Provider store={store}>
    <ShowTrucks />
      <p className='description-text'>
        That's pretty sweet, looks like we already have some
        trucks in our database. Use the form below to input a new
        truck name.
      </p>
    <NewTruck />
    <UpdateDeleteTruck />
  </Provider>
);

export default App;
