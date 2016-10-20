import React from 'react';
import $ from 'JQuery';
import InputBar from './input_bar';

class UpdateDeleteTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInputBar: false,
      name: '',
      message: '',
      truckID: null
    };
    this.displayOptions = this.displayOptions.bind(this);
    this.inputBar = this.inputBar.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({message: nextProps.message});
    setTimeout(() => this.setState({message: ''}), 2000);
  }

  displayOptions() {
    return this.props.trucks.trucksData.map(trucks => {
      return <option key={trucks.id}
                     data-id={trucks.id}>
              {trucks.name}
            </option>;
    });
  }

  selectTruck(e) {
    this.setState({
      showInputBar: true,
      truckID: $(e.currentTarget).find(':selected').data('id')
    });
  }

  inputBar() {
    const props = {
      updateName: this.updateName.bind(this),
      name: this.state.name,
      message: this.state.message,
      placeholder: 'Enter a Truck Name'
    };

    if (this.state.showInputBar) {
      return <InputBar {...props} />;
    } else {
      return null;
    }
  }

  inputInstructions() {
    if (this.state.showInputBar) {
      return (<p className='update-instructions'>
                Type 'remove' to delete truck
              </p>);
    } else {
      return null;
    }
  }

  updateName(e) {
    this.setState({name: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === 'remove') {
      this.props.deleteTruck(this.state.truckID);
    } else {
      //this.updateTruck();
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <select defaultValue=''
                className='truck-options'
                onChange={this.selectTruck.bind(this)}>
          <option value='' disabled>Select a Truck</option>
          {this.displayOptions()}
        </select>
        {this.inputBar()}
        {this.inputInstructions()}
      </form>
    );
  }
}

export default UpdateDeleteTruck;
