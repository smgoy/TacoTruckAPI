import React from 'react';
import TrucksButton from './trucks/all_trucks_container';
import NewTruckForm from './trucks/new_truck_container';
import UpdateDeleteTruck from './trucks/update_delete_truck';

const App = () => (
  <div>
    <TrucksButton />
    <p className='description-text'>
      Now, use the form below to input a new
      truck name.
    </p>
    <NewTruckForm />
  </div>
);

export default App;
