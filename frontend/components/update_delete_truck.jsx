import React from 'react';
import $ from 'JQuery';

class UpdateDeleteTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showInputBar: false,
      name: '',
      truckID: null
    };
    this.displayOptions = this.displayOptions.bind(this);
    this.inputBar = this.inputBar.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: 'api/trucks',
      method: 'GET',
      dataType: 'json',
      success: data => this.setState({data})
    });
  }

  displayOptions() {
    return this.state.data.map(trucks => {
      return <option key={trucks.id}
                     data-id={trucks.id}>
              {trucks.name}
            </option>;
    });
  }

  showInputBar(e) {
    console.log();
    this.setState({
      showInputBar: true,
      truckID: $(e.currentTarget).find(':selected').data('id')
    });
  }

  inputBar() {
    if (this.state.showInputBar) {
      return (<input type='text'
                    name='truck'
                    placeholder='Update or Remove Truck'
                    className='search-bar'
                    onChange={this.updateName}>
              </input>);
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
      this.deleteTruck();
    } else {
      this.updateTruck();
    }
  }

  updateTruck() {
    console.log('update');
  }

  deleteTruck() {
    $.ajax({
      url: `api/trucks/${this.state.truckID}`,
      method: 'DELETE',
      success: () => console.log('deleted')
    });
  }

  render() {
    return(
      <div>
        <p className='description-text'>
          Now lets explore some update and delete functionality.
        </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <select defaultValue=''
                  className='truck-options'
                  onChange={this.showInputBar.bind(this)}>
            <option value='' disabled>Select a Truck</option>
            {this.displayOptions()}
          </select>
          {this.inputBar()}
          {this.inputInstructions()}
        </form>
      </div>
    );
  }
}

export default UpdateDeleteTruck;
