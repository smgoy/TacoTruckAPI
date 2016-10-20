import React from 'react';
import TextField from 'material-ui/TextField';

class InputBar extends React.Component {
  render() {
    return (
      <TextField value={this.props.name}
                 floatingLabelText={this.props.placeholder}
                 hintText={this.props.hint}
                 onChange={this.props.updateName}
                 underlineFocusStyle={{color: '#626e60'}}
                 floatingLabelFocusStyle={{color: '#626e60'}}
                 style={{width: '100%'}} />
    );
  }
}

export default InputBar;
