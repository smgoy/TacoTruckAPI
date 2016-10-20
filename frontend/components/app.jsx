import React from 'react';
import TrucksButton from './trucks/all_trucks_container';
import NewTruckForm from './trucks/new_truck_container';
import UpdateDeleteTruck from './trucks/update_truck_container';

const App = () => (
  <div>
    <TrucksButton />
    <p className='description-text'>
      Now, use the form below to input a new
      truck name.
    </p>
    <NewTruckForm />
    <p className='description-text'>
      Now lets explore some update and delete functionality.
    </p>
    <UpdateDeleteTruck />
  </div>
);

export default App;
