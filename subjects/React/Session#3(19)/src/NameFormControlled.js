import React from 'react';
import './NameFormControlled.css'; 

class NameFormControlled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
  
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all the fields.');
    } else {
      alert(`Controlled: User Name: ${username}, Password: ${password}`);
      this.setState({ username: '', password: '' }); 
    }
  }
  

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="horizontal-form">
        <label>
          User Name:
          <input type="text" value={username} onChange={this.handleUsernameChange} className="form-input" />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={this.handlePasswordChange} className="form-input" />
        </label>
        <button type="submit" className="form-button">Submit</button>
      </form>
    );
  }
}

export default NameFormControlled;
