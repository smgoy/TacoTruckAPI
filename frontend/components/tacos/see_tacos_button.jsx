import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DisplayTacos from './display_tacos';

class SeeTacos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'View Tacos',
      display: 'hide-trucks'
    };
  }

  toggleButton() {
    if (this.state.text === 'View Tacos')
      this.setState({
        text: 'Hide Tacos',
        display: ''
      });
    else
      this.setState({
        text: 'View Tacos',
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
        <DisplayTacos tacos={this.props.tacos}
                       display={this.state.display}
                      truckID={this.props.truckID} />
      </div>
    );
  }
}

export default SeeTacos;
