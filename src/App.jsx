import { useRef, useState } from 'react'
import './App.css';
// import './App.css';

function App() {
  const [timer, setTimer] = useState(0);
  const Refid = useRef(null);
  function handleStart(){
    if(Refid.current!=null){// if current counter is running and user click ,button again ,this will handle that
      return;                     
    }
    Refid.current=setInterval(()=>{
       setTimer(timer=>timer+1);
    },1000);
  } 
  function handleStop(){
    clearInterval(Refid.current);
    Refid.current = null;
  }
  function handleReset(){
    clearInterval(Refid.current);
    Refid.current = null;
    setTimer(0);
  }
  return (
    <>
       <div className="card">
          <h1> Timer:
        <span>{timer}</span>
       </h1>
      <div id={"button-container"}>
        <button id ={"start"} onClick={handleStart}>Start</button>
       <button id ={"stop"} onClick={handleStop}>Stop</button>
      <button id ={"reset"} onClick={handleReset}>Reset</button>
      </div>
      </div>
    </>
  )
}

export default App
