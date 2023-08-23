import Unit from './Unit' 
import './App.css';
import {useState, useEffect}from 'react';
import UnitForm from './UnitForm';
import axios from 'axios'

function App() {
  const[units,setUnits]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/units")
    .then((response) => {
      console.log("response: ", response)
      setUnits(response.data)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
          <h1>Our Units</h1>
      </header>
      <div>
        <UnitForm units={units} setUnits={setUnits} />
      </div>
      {units.length > 0 && units.map(unit=> 
        (<Unit key={unit.code} code={unit.code} title={unit.title} offering={unit.offering}/>)
      )
      }
    </div>
  );
}

export default App;