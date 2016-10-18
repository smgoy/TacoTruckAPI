import React from 'react';
import DisplayTrucks from './display_trucks';

class TrucksButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Show all Trucks',
      display: 'hide-trucks'
    };
  }

  componentDidMount() {
    this.props.requestAllTrucks();
  }

  toggleButton() {
    if (this.state.text === 'Show all Trucks')
      this.setState({
        text: 'Hide Trucks',
        display: ''
      });
    else
      this.setState({
        text: 'Show all Trucks',
        display: 'hide-trucks'
      });
  }

  render() {
    return (
      <div>
        <div className='center-button'>
          <button className='show-trucks-button'
                  onClick={this.toggleButton.bind(this)}>
            {this.state.text}
          </button>
        </div>
        <DisplayTrucks trucks={this.props.trucks}
                       display={this.state.display} />
      </div>
    );
  }
}

export default TrucksButton;
