import React from 'react'
import img from './images/Shape 2.png'

export default function SearchBox(props) {
  return (
    <div>
        <img src={img} alt="" />
        <input type="text" value={props.inputValue} 
         onChange={(e)=> {props.changeInputValue(e)}}
         />
        <button onClick={props.change}>Search</button>
    </div>
  )
}
