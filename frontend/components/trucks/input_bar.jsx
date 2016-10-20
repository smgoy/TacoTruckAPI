import React from 'react';

class InputBar extends React.Component {
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
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default InputBar;
