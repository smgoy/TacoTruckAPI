import React from 'react';
import TrucksButton from './trucks/all_trucks_container';
import NewTruckForm from './trucks/new_truck_container';
import UpdateDeleteTruck from './trucks/update_truck_container';

const AppStyle = () => (
  <div>
    <TrucksButton />
    <p className='description-text'>
      Use the form below to input a new truck to the database.
    </p>
    <NewTruckForm />
    <p className='description-text'>
      If you've already added a new truck or don't want to, let's explore
      some of the trucks in more detail.
    </p>
    <UpdateDeleteTruck />
  </div>
);

export default AppStyle;
