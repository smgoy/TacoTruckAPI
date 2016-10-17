import React from 'react';
import $ from 'JQuery';

class ShowTrucks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.showTrucks = this.showTrucks.bind(this);
  }

  showTrucks() {
    $.ajax({
      url: 'api/trucks',
      method: 'GET',
      dataType: 'json',
      success: data => this.setState({data})
    });
  }

  displayData() {
    return this.state.data.map(truckName => (
      <li key={truckName}>{truckName}</li>
    ));
  }

  render() {
    return (
      <div>
        <div className='center-button'>
          <button className='show-trucks'
                  onClick={this.showTrucks}>
            Show all trucks
          </button>
        </div>
        <ul className='display-trucks'>
          {this.displayData()}
        </ul>
      </div>
    );
  }
}

export default ShowTrucks;
