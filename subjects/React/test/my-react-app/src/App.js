import './App.css';

import React from 'react';

class MyComponent extends React.Component {
  render() {
    
      const textLeftStyle = {
        textAlign: 'left',
      };
      const tableStyle = {
        border: '1px solid #000',
      };

    return (
      <div className="my-component" >
        <h1 >Isra Software &amp; Computer Co.</h1>
        <p >Isra Software and Computer Company was established in 1997 in Nablus as a specialized in the production of software at palestine and Arab Countries</p>
        <p > Includes more than 50 employees distributed in the following main departments (Research and Development, Training and Operation, Marketing and Sales, Finance, Audit and Quality)</p>
        <p > In addition to the company's headquarters in the city of Nablus, the company's branch was opened in Ramallah in 2004 to serve and flow-up customers in the central and southern regions.</p>
        <table className='table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zaid Khalid</td>
              <td>Nablus</td>
              <td>35</td>
              <td>Male</td>
              <td>0599111111</td>
            </tr>
            <tr>
            <td>Ahmad Mohammed</td>
              <td>Ramallah</td>
              <td>30</td>
              <td>Male</td>
              <td>0599222222</td>
            </tr>
            <tr>
            <td>Mais Isa</td>
              <td>Tulkarm</td>
              <td>27</td>
              <td>Female</td>
              <td>0599333333</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;


