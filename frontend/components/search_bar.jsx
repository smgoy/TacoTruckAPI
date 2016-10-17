import React from 'react';
import $ from 'JQuery';

class SearchBar extends React.Component {
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
      <form>
        <input type='text'
               name='truck'
               placeholder='Search Taco Trucks'
               className='search-bar'
               onChange={this.searchTrucks}>

        </input>
      </form>
    );
  }
}

export default SearchBar;
