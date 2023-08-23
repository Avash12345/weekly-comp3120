import Unit from './Unit' 
import './App.css';
import {useState}from 'react';
import UnitForm from './UnitForm';

function App() {
  const[units,setUnits]=useState([{code:"comp3120",title:"Advanced Web Development" ,offering:["s1"]}])
  return (
    <div className="App">
      <header className="App-header">
          <h1>Our Units</h1>
      </header>
      <div>
        <UnitForm units={units} setUnits={setUnits} />
      </div>
      {units.map(unit=> 
        (<Unit key={unit.code} code={unit.code} title={unit.title} offering={unit.offering}/>)
      )
      }
    </div>
  );
}

export default App;