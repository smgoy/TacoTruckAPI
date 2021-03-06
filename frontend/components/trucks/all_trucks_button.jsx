import React from 'react';
import DisplayTrucks from './display_trucks';
import RaisedButton from 'material-ui/RaisedButton';

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
          <RaisedButton label={this.state.text}
                        onClick={this.toggleButton.bind(this)}
                        backgroundColor='#626e60'
                        style={{width: '100%'}} />
        </div>
        <DisplayTrucks trucks={this.props.trucks}
                       display={this.state.display} />
      </div>
    );
  }
}

export default TrucksButton;
