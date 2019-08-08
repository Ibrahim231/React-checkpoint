import React from 'react';
import './App.css';
import Image from './logo2.png';
function App() {
  return (
    <div className="App">
  <div style={{border:"solid 1px black ", maxWidth:"100vw"}}>
  <h1 className="title red">My title</h1>
  <br/>
  <div className="image" >
  <img  src={Image} />
  </div>
<br/>

<img src={Image} />
   </div>
    </div>
  );
}

export default App;
