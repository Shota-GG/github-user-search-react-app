import React from 'react'
import img from './images/Shape 2.png'

export default function SearchBox(props) {
  return (
    <div style={div}>
        <img src={img} alt="" />
        <input style={inpt} type="text" placeholder='Search GitHub username…' value={props.inputValue} 
         onChange={(e)=> {props.changeInputValue(e)}}
         />
        <button style={btn} onClick={props.change}>Search</button>
    </div>
  )
}
 let div = {
  width: "730px",
  height: "69px",
  borderRadius: "15px",
  backgroundColor: "#FEFEFE",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "24px",
 }
 let inpt = {
  width: "550px",
  height: "50px",
  border: "none",
  outline: "none",
  fontSize: "18px"

 }
 let btn = {
  width: "106px",
  height: "50px",
  borderRadius: "10px",
  backgroundColor: "#0079FF",
  border: "none",
  fontSize: "16px",
  color: "#FFFFFF"
 }
