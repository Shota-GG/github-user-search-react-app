import React from 'react'
import img from './images/Shape 2.png'

export default function SearchBox(props) {
  return (
    <div style={props.click ? { ...div, backgroundColor: "#1E2A47"} : {...div, backgroundColor: "#FEFEFE"}}>
        <img style={imge} src={img} alt="" />
        <input style={props.click? {...inpt, backgroundColor: "#1E2A47", color: "#ffffff"} : {...inpt, backgroundColor: "#FEFEFE"}} type="text" placeholder='Search GitHub username…' value={props.inputValue} 
         onChange={(e)=> {props.changeInputValue(e)}}
         />
         <p style={{fontSize: "12px", color: "#F74646"}}>{props.found}</p>
        <button style={btn} onClick={props.change}>Search</button>
    </div>
  )
}
 let div = {
  width: "730px",
  height: "69px",
  borderRadius: "15px",
  // backgroundColor: "#FEFEFE",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
 }
 let inpt = {
  width: "400px",
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
  color: "#FFFFFF",
  marginRight: "15px",
  cursor: "pointer"
 }
 let imge = {
  marginLeft: "15px"
 }
