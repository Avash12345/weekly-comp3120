import axios from 'axios';

import {useState} from 'react'

const UnitForm = (props) => {
    const [code, setCode] = useState('');
    const [title, setTitle] = useState('');

    const onFormSubmit = () => {
        const newUnit = {
            code: code,
            title: title,
            offering: ['S1'],
        }
        axios.post("http://localhost:3001/units", newUnit)
        .then(response => {
            console.log("POST response", response)
            props.setUnits([...props.units, response.data])
        })
       
    }

        return (
        <div>
           <h2>Add unit</h2>
           <form>
            <label>Code</label>
            <input type="text" name="unit-code" id="unit-code" onChange={e => setCode(e.target.value)} />
            <br/>

            <label>Title</label>
            <input type="text" name="unit-title" id="unit-title" onChange={e => setTitle(e.target.value)} />
            <br/>

            <input type="button" value={`Add unit`} id="submit-button" onClick={onFormSubmit} />
            </form>
            
        </div>
    )
}

export default UnitForm;