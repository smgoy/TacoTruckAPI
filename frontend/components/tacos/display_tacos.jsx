import React from 'react';
import InlineEdit from 'react-edit-inline';

class DisplayTacos extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {tacos, display} = this.props;

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
      <div>
        <ul className={`display-tacos ${display}`}>
          {displayTacos}
          <li className='tacos'>Add Taco</li>
        </ul>
      </div>
    );
  }

}

export default DisplayTacos;
