import React from 'react';
import './App.css';

const Person = ({ name = 'Zeyad', eyeColor = 'deepblue', age = 35 }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Age: {age}</p>
      <hr />
    </div>
  );
};

const App = ({ persons }) => {
  const defaultPersons = [
    { name: 'Person 1', eyeColor: 'blue', age: '23' },
    { name: 'Person 2', eyeColor: 'blue' },
    { name: 'Person 3', age: '23' },
    { eyeColor: 'green', age: '23' },
  ];

  const renderedDefaultPersons = defaultPersons.map((person, index) => <Person {...person} key={index} />);
  const renderedPropsPersons = persons && persons.map((person, index) => <Person {...person} key={index} />);

  return (
    <div className="app-container">
      <div className="default-persons">
        <h3>No Props Passed Persons</h3>
        {renderedDefaultPersons}
      </div>
      <div className="props-persons">
        <h3>Persons with Props</h3>
        {renderedPropsPersons.length ? (
          renderedPropsPersons
        ) : (
          <p>No persons passed through props.</p>
        )}
      </div>
    </div>
  );
};

export default App;
