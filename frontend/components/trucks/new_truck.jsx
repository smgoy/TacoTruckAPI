import React from 'react';
import InputBar from './input_bar';

class NewTruckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  capitalize(text) {
    if (text === '') return '';
    return text.split(' ').map(word => {
      if (word[0] === undefined) return '';
      return word[0].toUpperCase() + word.slice(1, word.length);
    }).join(' ');
  }

  updateName(e) {
    this.setState({name: this.capitalize(e.currentTarget.value)});
  }

  addTruck(e) {
    e.preventDefault();
    this.props.addTruck(this.state.name);
  }

  render () {
    const props = {
      updateName: this.updateName.bind(this),
      name: this.state.name
    };

    return (
      <form onSubmit={this.addTruck.bind(this)}>
        <InputBar {...props} />
      </form>
    );
  }
}

export default NewTruckForm;