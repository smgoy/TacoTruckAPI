import React from 'react';
import $ from 'JQuery';

class AddTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  updateName(e) {
    this.setState({name: this.capitalize(e.currentTarget.value)});
  }

  capitalize(text) {
    if (text === '') return '';
    return text.split(' ').map(word => {
      if (word[0] === undefined) return '';
      return word[0].toUpperCase() + word.slice(1, word.length);
    }).join(' ');
  }

  addTruck(e) {
    e.preventDefault();
    $.ajax({
      url: 'api/trucks',
      method: 'POST',
      data: this.state,
      success: data => console.log(data),
      error: data => console.log(data)
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
        <form onSubmit={this.addTruck.bind(this)}>
          <div className='inline-text'>
            <input type='text'
                   name='truck'
                   placeholder='Enter a Truck Name'
                   className='search-bar'
                   onChange={this.updateName.bind(this)}>

            </input>
            <p>{this.state.name}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTruck;
