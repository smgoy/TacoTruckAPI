import React from 'react';

const Welcome = () => (
  <div>
    <h1 className='title'>Taco Truck API</h1>
    <p className='description-text bottom-margin'>
      Welcome! Thanks for checking out my Taco Truck API.
    </p>
    <ul className='icon-row-tech'>
      <i className="devicon-nodejs-plain colored"></i>
      <i className="devicon-mongodb-plain-wordmark colored"></i>
      <i className="devicon-react-original-wordmark colored"></i>
    </ul>
    <p className='description-text bottom-margin'>
      I have built a sleek frontend using ReactJS to help show off my
      NodeJS API that renders and stores data in a noSQL MongoDB database.
      I set the backend up to render back descriptive success
      or error JSON objects to allow the user to understand any input or
      validation errors. Explore the interface by adding, deleting, updating
      or viwing trucks and tacos. Enjoy!
    </p>
    <ul className='icon-row-job'>
      <a href='https://github.com/smgoy' target='_blank'><i className="fa fa-github size" aria-hidden="true"></i></a>
      <a href='https://www.linkedin.com/in/sam-gyory-43572766' target='_blank'><i className="fa fa-linkedin-square size" aria-hidden="true"></i></a>
    </ul>
  </div>
);

export default Welcome;
