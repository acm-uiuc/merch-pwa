import React from 'react';

import 'screens/Login.css';
import acmLogo from 'images/acmLogo.svg';
import palantirLogo from 'images/palantirLogo.svg';

/*
  This screen shows a login page to enter the api key into.

  props:
    updateKey: Function to attempt to login with the entered key.
  
  state:
    value: The current entered key in the password textbox.
*/
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.updateKey(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className='contentBox'>
        <div className='header'>
          <img src={acmLogo} alt='ACM logo' className='acmLogo'/>
          <div className='merchLogo'>Merch</div>
          <img src={palantirLogo} alt='Palantir Logo' className='palantirLogo'/>
        </div>
        <div className='loginContent'>
          <div className='loginLabel'>Password:</div>
          <form className='loginForm' onSubmit={this.handleSubmit}>
            <input type='password' onChange={this.handleChange}
                   value={this.state.value}/>
            <button type='submit'><i className='fas fa-chevron-right'/></button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
