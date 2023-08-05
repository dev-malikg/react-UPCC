import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Formtext(props) {

  const [text, setText] = useState("enter text here");
  const [updatedText, setUpdatedText] = useState("Your updted text will appear here :)");

  const handelTextChange = (event)=> {
    setText(event.target.value); // very imp code 
  }

  const handelReFormat = ()=> {
    setUpdatedText(text.toUpperCase())
  }

  return (
    <div className='textt'>
      <div>
        <p>Enter a text below to get started</p>
        <textarea cols="30" rows={props.lines} className='texttarea' value={text} onChange={handelTextChange}></textarea>

        <br/> <button onClick={handelReFormat}>ReFormet</button>
        <p className='texttarea' >{updatedText}</p>
      </div>
    </div>
  )
}

// galti pacadna ka lia :)
Formtext.propTypes = {
  lines: PropTypes.number.isRequired,
}
