import React from 'react';
import $ from 'JQuery';

class TrucksButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.props.requestAllTrucks();
  }

  displayData() {
    return this.state.data.map(trucks => (
      <li key={trucks.name} className='trucks'>{trucks.name}</li>
    ));
  }

  render() {
    return (
      <div>
        <div className='center-button'>
          <button className='show-trucks-button'
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

export default TrucksButton;
