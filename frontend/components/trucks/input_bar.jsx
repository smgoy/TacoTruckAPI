import React from 'react';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      success: '',
      error: '' //need to add custom validation
    };
  }

  render() {
    return (
      <div className='inline-text'>
        <input type='text'
               name='truck'
               placeholder='Enter a Truck Name'
               className='search-bar'
               onChange={this.props.updateName}>
        </input>
        <p>{this.props.name}</p>
        <p>{this.state.success}</p>
        <p>{this.state.error}</p>
      </div>
    );
  }
}

export default InputBar;
