import React from 'react';
import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Aqui haremos nuestro TO-DO list
        </p>
        <Form></Form>
      </header>
    </div>
  );
}

export default App;
