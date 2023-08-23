

import {useState} from 'react'

const Unit = (props) => {
 const [title, setTitle] = useState(props.title)
        return (
        <div>
            <h2>{props.code} {title}</h2>
          {props.offering.map(o=><li>{o}</li>)}
            
        </div>
    )
}

export default Unit;