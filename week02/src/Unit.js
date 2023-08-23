

import {useState} from 'react'

const Unit = (props) => {
 const [title, setTitle] = useState(props.title)
        return (
        <div>
            <h2>{props.code} {title}</h2>
            <button onClick={() => setTitle(title.toUpperCase())}>Upper Case</button>
            <button onClick={() => setTitle(title.toLowerCase())}>Lower Case</button>
        </div>
    )
}

export default Unit;