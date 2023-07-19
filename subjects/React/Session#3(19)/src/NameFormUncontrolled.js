import React from 'react';
import './NameFormUncontrolled.css'; 

class NameFormUncontrolled extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const submittedName = this.usernameInput.value;
    const submittedPassword = this.passwordInput.value;
  
    if (submittedName.trim() === '' || submittedPassword.trim() === '') {
      alert('Please fill in all the fields.');
    } else {
      alert(`Uncontrolled: User Name: ${submittedName}, Password: ${submittedPassword}`);
      event.target.reset(); 
    }
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="horizontal-form">
        <label>
          User Name:
          <input type="text" ref={input => (this.usernameInput = input)} className="form-input" />
        </label>
        <label>
          Password:
          <input type="password" ref={input => (this.passwordInput = input)} className="form-input" />
        </label>
        <button type="submit" className="form-button">Submit</button>
      </form>
    );
  }
}

export default NameFormUncontrolled;
