import React from 'react';
import $ from 'JQuery';

class AddTruck extends React.Component {
  constructor(props) {
    super(props);
    
  }

  searchTrucks() {
    $.ajax({
      url: 'api/trucks',
      method: 'GET',
      dataType: 'json',
      success: data => console.log(data)
    });
  }

  render() {
    return (
      <div>
        <p className='description-text'>
          That's pretty cool, looks like we already have some
          trucks in out database, use the form below to input a new
          truck name.
        </p>
        <form>
          <input type='text'
                 name='truck'
                 placeholder='Enter a Truck Name'
                 className='search-bar'
                 onChange={this.searchTrucks}>

          </input>
        </form>
      </div>
    );
  }
}

export default AddTruck;
