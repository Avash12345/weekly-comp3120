

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
        props.setUnits([...props.units, newUnit]);
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