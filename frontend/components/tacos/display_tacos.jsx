import React from 'react';
import InlineEdit from 'react-edit-inline';
import TextField from 'material-ui/TextField';

class DisplayTacos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: null
    };
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

  render() {
    const {tacos, display} = this.props;

    if (display === 'hide-trucks') this.state.inputField = null;

    const displayTacos = tacos.map(taco => {
      let ingredients = '';
      taco.ingredients.forEach(ingredient => (
        ingredients = ingredients + ingredient + ', '
      ));
      ingredients = ingredients.slice(0, -2);
      return (
        <li key={`taco-${taco.name}`}
            className='tacos'>
          {taco.name}: <span className='ingredients'>{ingredients}</span>
        <i key={`edit-${taco.name}`}
           className="fa fa-pencil"
           aria-hidden="true"></i>
        <i key={`delete-${taco.name}`}
           className="fa fa-trash"
           aria-hidden="true"></i>
        </li>
      );
    });

    return (
      <div className={display}>
        <ul className='display-tacos'>
          {displayTacos}
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
