import React from 'react';
import InputBar from './input_bar_container';

class NewTruckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: null
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({message: nextProps.message});
    setTimeout(() => this.setState({message: ''}), 2000);
  }

  capitalize(string) {
    if (string === '') return '';
    return string.split(' ').map(word => {
      if (word[0] === undefined) return '';
      var lowerCase = word.toLowerCase();
      return lowerCase[0].toUpperCase() + lowerCase.slice(1, lowerCase.length);
    }).join(' ');
  }

  updateName(e) {
    this.setState({name: this.capitalize(e.currentTarget.value)});
  }

  addTruck(e) {
    e.preventDefault();
    this.props.addTruck(this.state);
    this.setState({name: ''});
  }

  render () {
    const props = {
      updateName: this.updateName.bind(this),
      name: this.state.name,
      message: this.state.message,
      placeholder: 'Enter a Truck Name',
      hint: ''
    };

    return (
      <form onSubmit={this.addTruck.bind(this)}>
        <InputBar {...props} />
      </form>
    );
  }
}

export default NewTruckForm;
