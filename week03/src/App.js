import Unit from './Unit' 
import './App.css';

function App() {
   const units = [
    {code: 'COMP1010', title:'Fundamentals of Computer Science', offering: ['S1', 'S2']},
    {code: 'COMP1750', title:'Introduction to Business Information Systems', offering: ['S1']},
    {code: 'COMP2110', title:'Web Technology', offering: ['S1', 'S2']},
    {code: 'COMP2750', title:'Applications Modelling and Development', offering: ['S1']},
    {code: 'MMCC2045', title:'Interactive Web Design', offering: ['S2']},
    {code: 'COMP3120', title:'Advanced Web Development', offering: ['S2']},
    {code: 'COMP3130', title:'Mobile Application Development', offering: ['S1']}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>COMP3120: Advanced Web Development</h1> 
         <Unit code="COMP3120" title="Advanced Web Development"  offering={["s1"]}/>
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