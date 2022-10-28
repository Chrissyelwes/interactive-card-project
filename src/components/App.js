import React from 'react';
import CardForm from '../components/CardForm';
import '../styles/app.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Interactive Card Form</h1>
       <CardForm />
      </header>
    </div>
  );
}

export default App;
