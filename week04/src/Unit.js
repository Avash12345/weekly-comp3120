

import {useState} from 'react'

const Unit = (props) => {
 const [title, setTitle] = useState(props.title)
        return (
        <div>
            <h2>{props.code} {title}</h2>
          {props.offering && props.offering.map((o, index)=><li key={index}>{o}</li>)}
            
        </div>
    )
}

export default Unit;