import React from 'react';
import $ from 'JQuery';

class ShowTrucks extends React.Component {
  showTrucks() {
    $.ajax({
      url: 'api/trucks',
      method: 'GET',
      dataType: 'json',
      success: data => console.log(data)
    });
  }

  render() {
    return (
      <div className='center-button'>
        <button className='show-trucks'
                onClick={this.showTrucks}>
          Show all trucks
        </button>
      </div>
    );
  }
}

export default ShowTrucks;
