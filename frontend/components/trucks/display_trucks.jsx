import React from 'react';

const DisplayTrucks = ({trucks, display}) => {

  const displayTrucks = trucks.map(truck => (
    <li key={truck.id} className='trucks'>{truck.name}</li>
  ));

  return (
    <div>
      <ul className={`display-trucks ${display}`}>
        {displayTrucks}
      </ul>
      <p className={`description-text ${display}`}>
        That's pretty sweet, looks like we already have some
        trucks in our database.
      </p>
    </div>
  );
};

export default DisplayTrucks;
