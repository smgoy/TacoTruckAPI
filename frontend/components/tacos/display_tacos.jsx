import React from 'react';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import $ from 'jquery';

class DisplayTacos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      inputField: false,
      inputText: null,
      tacoID: null,
      newTaco: '',
      errorMessageNew: '',
      errorMessageEdit: ''
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.editMessage !== '') {
      this.setState({
        errorMessageNew: newProps.newMessage,
        errorMessageEdit: newProps.editMessage,
        open: true
      });
    } else {
      this.setState({
        errorMessageNew: newProps.newMessage
      });
    }
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
    this.props.clearTacoErrors('new');
    const ingredients = this.parseTaco(this.state.newTaco);
    const name = ingredients.shift();
    this.props.addTaco({name, ingredients, truckID: this.props.truckID});
    this.setState({newTaco: ''});
  }

  displayInput() {
    if (this.state.inputField) {
      return(
        <form className='new-taco' onSubmit={this.addNewTaco.bind(this)}>
          <TextField hintText="Taco Name: Ingredient One, Ingredient Two, ..."
                     value={this.state.newTaco}
                     errorText={this.state.errorMessageNew}
                     floatingLabelText="Add a New Taco"
                     onChange={this.updateTacoInfo.bind(this)}
                     style={{width: '100%'}} />
        </form>
      );
    } else {
      return null;
    }
  }

  addInputField() {
    this.setState({inputField: true});
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

  handleRequestClose() {
    this.props.clearTacoErrors('edit');
    this.setState({open: false});
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
        <li key={`taco-${taco.id}`}
            className='tacos'
            data-id={taco.id}>
          {taco.name}: <span className='ingredients'>{ingredients}</span>
        <i key={`edit-${taco.id}`}
           className="fa fa-pencil"
           onClick={this.inputify.bind(this)}
           aria-hidden="true"></i>
         <i key={`delete-${taco.id}`}
           className="fa fa-trash"
           onClick={this.deleteTaco.bind(this)}
           aria-hidden="true"></i>
        </li>
      );
    });
  }

  render() {
    const {tacos, display} = this.props;

    if (display === 'hide-trucks') this.state.inputField = false;

    return (
      <div className={display}>
        <ul className='display-tacos'>
          {this.displayTacos()}
          <a className='add-taco'
            onClick={this.addInputField.bind(this)}>
            - Add Taco -
          </a>
        </ul>
        {this.displayInput()}
        <Snackbar open={this.state.open}
                  message={this.state.errorMessageEdit}
                  autoHideDuration={2000}
                  onRequestClose={this.handleRequestClose.bind(this)}
                  bodyStyle={{backgroundColor: '#af473c'}}
                  contentStyle={{textAlign: 'center'}} />
        <p className='description-text'>
          Thank you for visiting my Taco Truck API!
          Hope you're not too hungry now. 
        </p>
      </div>
    );
  }

}

export default DisplayTacos;
