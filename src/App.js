/* eslint-disable */
import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  let origins = ['강남 고기 맛집', '강남 회 맛집', '강남 디저트 맛집' ];
  // let changes = ['강남 커피 맛집','강남 빵 맛짐', '강남 분식집']
  let [state, setState] = useState(origins);
  let [num, setNum] =useState(0)
  let good = () => {
    setNum(num+1);
  }
  let changeTitles = () => {
    var news = [...origins]
    news[0] = '강남 커피 맛집';
    setState(news)
  }
  return (
    <div className="App">
      <div className="black-nav">
    개발 Blog
      </div>
      <div className="list">
        <button onClick={changeTitles}>다른거 볼래</button>
        <h3>{state[0]} <button onClick = {good}>좋아요👍</button> <span>{num}</span></h3>
        <p>명진이는 바보</p>
        <hr/> 
      </div>
      <div className="list">
        <h3>{state[1]}</h3>
        <p>명진이는 똥개</p>
        <hr/> 
      </div>
      <div className="list">
        <h3>{state[2]}</h3>
        <p>명진이는 돼지</p>
        <hr/> 
      </div>

<Modal />

    </div>
  );
}

function Modal(){
  return(
    <div className = "modal">
        <h2>제목</h2>
        <p>하기 싫다...</p>
        <p>상세 내용.</p>
      </div>
  )
}

export default App;