import Unit from './Unit' 
import './App.css';
import {useState }from 'react';

function App() {
  const[units,setUnits]=useState([{code:"comp3120",title:"Advanced Web Development" ,offering:["s1"]}])
  return (
    <div className="App">
      <header className="App-header">
          <h1>Our Units</h1>
      </header>
      {units.map(unit=> 
        (<Unit key={unit.code} code={unit.code} title={unit.title} offering={unit.offering}/>)
      )
      }
    </div>
  );
}

export default App;