import React from 'react';

const DisplayTrucks = ({trucks, display}) => {

  const displayTrucks = trucks.map(truck => (
    <li key={truck.id} className='trucks'>{truck.name}</li>
  ));

  return (
    <ul className={`display-trucks ${display}`}>
      {displayTrucks}
    </ul>
  );
};

export default DisplayTrucks;
