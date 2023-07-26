import React from 'react';
import './App.css';
import RegistrationFormComponent from './components/RegistrationFormComponent';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <RegistrationFormComponent />
    </div>
  );
}

export default App;
