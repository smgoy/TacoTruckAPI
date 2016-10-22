import React from 'react';
import InlineEdit from 'react-edit-inline';
import TextField from 'material-ui/TextField';
import $ from 'JQuery';

class DisplayTacos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: null,
      inputText: null,
      tacoID: null
    };
    this.dataChanged = this.dataChanged.bind(this);
  }

  addInputField() {
    const textField = (
      <form className='new-taco'>
        <TextField hintText="Format (Taco Name: Ingredient One, Ingredient Two, ...)"
                   floatingLabelText="Add a New Taco"
                   style={{width: '100%'}}/>
      </form>
    );
    this.setState({inputField: textField});
  }

  inputify(e) {
    const listElement = $(e.currentTarget).parent();
    this.setState({
      inputText: listElement.text(),
      tacoID: listElement.data('id')
    });
  }

  dataChanged(data){
    debugger;
  }

  inlineEdit() {
    return (
      <InlineEdit activeClassName="editing"
                  text={this.state.inputText}
                  paramName="message"
                  change={this.dataChanged}
                  style={{
                    backgroundColor: 'yellow',
                    minWidth: 150,
                    display: 'inline-block',
                    margin: 0,
                    padding: 0,
                    fontSize: 15,
                    outline: 0,
                    border: 0
                  }} />
        );
  }

  displayTacos() {
    const {tacos} = this.props;

    debugger;
    const displayTacos = tacos.map(taco => {
      if (taco.id === this.state.tacoID) return this.inlineEdit();
      let ingredients = '';
      taco.ingredients.forEach(ingredient => (
        ingredients = ingredients + ingredient + ', '
      ));
      ingredients = ingredients.slice(0, -2);
      return (
        <li key={`taco-${taco.name}`}
            className='tacos'
            data-id={taco.id}>
          {taco.name}: <span className='ingredients'>{ingredients}</span>
        <i key={`edit-${taco.name}`}
           className="fa fa-pencil"
           onClick={this.inputify.bind(this)}
           aria-hidden="true"></i>
        <i key={`delete-${taco.name}`}
           className="fa fa-trash"
           aria-hidden="true"></i>
        </li>
      );
    });
  }

  render() {
    const {tacos, display} = this.props;

    if (display === 'hide-trucks') this.state.inputField = null;

    return (
      <div className={display}>
        <ul className='display-tacos'>
          {this.displayTacos()}
          <a className='add-taco'
            onClick={this.addInputField.bind(this)}>
            - Add Taco -
          </a>
        </ul>
        {this.state.inputField}
      </div>
    );
  }

}

export default DisplayTacos;
