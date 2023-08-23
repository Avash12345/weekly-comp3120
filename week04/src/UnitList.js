
import {useState, useEffect}from 'react';
import UnitForm from './UnitForm';
import axios from 'axios';
import Unit from './Unit';

const UnitList = () => {
    const[units,setUnits]=useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/units")
      .then((response) => {
        console.log("response: ", response)
        setUnits(response.data)
      })
    },[])  

    return (<div>
        {units && units.length > 0 && units.map(unit => {
            return <Unit key={unit.code} code={unit.code} title={unit.title} />
        })}
    </div>)
}

export default UnitList;
