import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import './RegistrationFormComponent.css';

const RegistrationFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
    telephone: '',
    cours: 'C#', 
    notes: '',
  });

  const coursOptions = ['C#', 'ReactJs', 'Java', 'C++', 'Python'];

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const validationFailed = false; 

    if (validationFailed) {
      alert('Validation failed. Please check the form fields.');
      return;
    }

    alert('Registration successful!');

    setFormData({
      name: '',
      address: '',
      email: '',
      password: '',
      telephone: '',
      cours: 'C#', 
      notes: '',
    });
  };

  const handleFormReset = () => {
    setFormData({
      name: '',
      address: '',
      email: '',
      password: '',
      telephone: '',
      cours: 'C#',
      notes: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCoursChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      cours: event.value,
    }));
  };

  return (
    <div className="form-container">
        <div className="container">
        <h2>REGISTRATION FORM</h2>
        <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
            <div className="form-field">
            <label htmlFor="name">Name:</label>
            <InputText id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-field">
            <label htmlFor="address">Address:</label>
            <InputText id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div className="form-field">
            <label htmlFor="email">E-mail:</label>
            <InputText id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-field">
            <label htmlFor="password">Password:</label>
            <Password id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>

            <div className="form-field">
            <label htmlFor="telephone">Telephone:</label>
            <InputText id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required />
            </div>

            <div className="form-field custom-dropdown">
            <label htmlFor="cours">Cours:</label>
            <Dropdown id="cours" name="cours" options={coursOptions} value={formData.cours} onChange={handleCoursChange} required placeholder="Select a course" />
            </div>

            <div className="form-field">
            <label htmlFor="notes">Notes:</label>
            <InputTextarea id="notes" name="notes" value={formData.notes} onChange={handleChange} />
            </div>

            <div className="form-buttons">
            <Button type="submit" label="Send" />
            <Button type="reset" label="Reset" />
            </div>
        </form>
        </div>
    </div>
  );
};

export default RegistrationFormComponent;
