import React from 'react';
import ShowTrucks from './components/all_trucks_button';
import NewTruck from './components/new_truck';
import UpdateDeleteTruck from './components/update_delete_truck';


const App = () => (
  <div>
    <ShowTrucks />
    <NewTruck />
    <UpdateDeleteTruck />
  </div>
);

export default App;
