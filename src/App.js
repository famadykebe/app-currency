import React from 'react';
import './App.css';
import Country from './components/country';
import RateExchangeList from './components/rate-exchange-list';

function App() {
  return (
    <div className="container">
      <h1 className="title">Cour d'évolution d'une monaie par rapport aux $</h1>
      <Country/>
        <br/>
        <br />
      <RateExchangeList />

    </div>
  );
}

export default App;
