import React from 'react';
import $ from 'jquery';
import InputBar from './input_bar_container';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SeeTacos from '../tacos/see_tacos_container';

class UpdateDeleteTruck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      data: [],
      showInputBar: false,
      name: '',
      message: null,
      truckID: null
    };
    this.displayOptions = this.displayOptions.bind(this);
    this.inputBar = this.inputBar.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.trucks.trucksData.map(truck=>truck.name),
      message: nextProps.trucks.message
    });
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


  displayOptions() {
    return this.props.trucks.trucksData.map(trucks => {
      return <MenuItem key={trucks.id}
                       value={trucks.id}
                       primaryText={trucks.name}>
            </MenuItem>;
    });
  }

  selectTruck(event, index, value) {
    console.log(event.target.value);
    if (value) this.props.requestTacos(value);
    let showInputBar = true;
    if (value === null) showInputBar = false;
    this.setState({
      value,
      showInputBar,
      truckID: value
    });
  }

  inputBar() {
    const props = {
      updateName: this.updateName.bind(this),
      name: this.state.name,
      message: this.state.message,
      placeholder: 'Update Truck',
      hint: "Type \'remove\' to delete truck"
    };

    if (this.state.showInputBar) {
      return <InputBar {...props} />;
    } else {
      return null;
    }
  }

  seeTruckOptions() {
    if (this.state.showInputBar) {
      return (
        <div>
          <p className='description-text bottom-margin'>
            Update the truck's name or checkout it's tacos.
          </p>
          <SeeTacos truckID={this.state.truckID} />
        </div>
      );
    } else {
      return null;
    }
  }

  updateName(e) {
    this.setState({name: this.capitalize(e.currentTarget.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.name === 'Remove') {
      this.props.deleteTruck(this.state.truckID);
      this.setState({
        value: null,
        showInputBar: false,
        truckID: null
      });
    } else {
      this.props.updateTruck(this.state.truckID, {name: this.state.name});
    }
    this.setState({name: ''});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <SelectField value={this.state.value}
                       floatingLabelText="Select a Truck"
                       onChange={this.selectTruck.bind(this)}
                       maxHeight={200}
                       style={{width: '100%'}}>
            <MenuItem value={null} primaryText="" />
            {this.displayOptions()}
          </SelectField>
          {this.inputBar()}
        </form>
        {this.seeTruckOptions()}
      </div>
    );
  }
}

export default UpdateDeleteTruck;
