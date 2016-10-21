import React from 'react';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: '',
      color: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    let color;
    if (nextProps.message === 'Success!') {
      color = '#626e60';
    } else {
      color = '#af473c';
    }
    if (nextProps.message) {
      this.setState({
        open: true,
        message: nextProps.message,
        color
      });
    }
  }

  handleRequestClose() {
    this.props.clearErrors();
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <TextField value={this.props.name}
                   floatingLabelText={this.props.placeholder}
                   hintText={this.props.hint}
                   onChange={this.props.updateName}
                   underlineFocusStyle={{color: '#626e60'}}
                   floatingLabelFocusStyle={{color: '#626e60'}}
                   style={{width: '100%'}} />
        <Snackbar open={this.state.open}
                  message={this.state.message}
                  autoHideDuration={2000}
                  onRequestClose={this.handleRequestClose.bind(this)}
                  bodyStyle={{backgroundColor: this.state.color}}
                  contentStyle={{textAlign: 'center'}} />
      </div>
    );
  }
}

export default InputBar;
