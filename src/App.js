import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  let [state, setState] = useState( ['강남 고기 맛집', '강남 회 맛집' ]);
  return (
    <div className="App">
      <div className="black-nav">
    개발 Blog
      </div>
      <div className="list">
        <h3>{state[1]}</h3>
        <p>명진이는 67kg</p>
        <hr/> 
      </div>
    </div>
  );
}

export default App;