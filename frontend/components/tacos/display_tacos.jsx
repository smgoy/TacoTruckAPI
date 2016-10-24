import React from 'react';
import InlineEdit from 'react-edit-inline';
import TextField from 'material-ui/TextField';
import $ from 'jquery';

class DisplayTacos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: null,
      inputText: null,
      tacoID: null,
      newTaco: ''
    };
  }

  updateTacoInfo(e) {
    this.setState({newTaco: e.currentTarget.value});
  }

  parseTaco(str) {
    const regex = /[\w]+(\s+[\w]+)*/g;
    let m;
    let ingredients = [];

    while ((m = regex.exec(str)) !== null) {

        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match, groupIndex) => {
            if(groupIndex === 0) ingredients.push(match);
        });
    }

    return ingredients;
  }

  addNewTaco(e) {
    e.preventDefault();
    const ingredients = this.parseTaco(this.state.newTaco);
    const name = ingredients.shift();
    this.props.addTaco({name, ingredients, truckID: this.props.truckID});
    this.setState({newTaco: ''});
  }

  addInputField() {
    const textField = (
      <form className='new-taco' onSubmit={this.addNewTaco.bind(this)}>
        <TextField hintText="Format (Taco Name: Ingredient One, Ingredient Two, ...)"
                   floatingLabelText="Add a New Taco"
                   onChange={this.updateTacoInfo.bind(this)}
                   style={{width: '100%'}} />
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

  deleteTaco(e) {
    const listElement = $(e.currentTarget).parent();
    this.props.deleteTaco(listElement.data('id'));
  }

  revertEdit() {
    this.setState({
      inputText: null,
      tacoID: null
    });
  }

  updateText(e){
    this.setState({inputText: e.currentTarget.value});
  }

  editTaco() {
    const ingredients = this.parseTaco(this.state.inputText);
    const name = ingredients.shift();
    this.props.editTaco(this.state.tacoID, {
      name,
      ingredients,
      truckID: this.props.truckID
    });
    this.revertEdit();
  }

  inlineEdit() {
    return (
      <li key='input-list' className='tacos'>
        <input key='input text'
               className='inline-edit'
               value={this.state.inputText}
               onChange={this.updateText.bind(this)}>
        </input>
        <i key='check'
           className="fa fa-check"
           onClick={this.editTaco.bind(this)}
           aria-hidden="true"></i>
        <i key='undo'
           className="fa fa-undo"
           aria-hidden="true"
           onClick={this.revertEdit.bind(this)}></i>
      </li>
        );
  }

  displayTacos() {
    const {tacos} = this.props;

    return tacos.map(taco => {
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
           onClick={this.deleteTaco.bind(this)}
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
