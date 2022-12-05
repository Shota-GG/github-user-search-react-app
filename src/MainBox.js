import React from 'react'

export default function MainBox(props) {
    console.log(props);
  return (
    <div style={main}>
      <div>
        <img style={img} src={props.data.avatar_url} alt="" />
      </div>
      <div>
        <h1 style={nam}>{props.data.name}</h1>
        <p style={log}>@{props.data.login}</p>
        <p></p>
      </div>
      <div>
        <p style={creat}>{props.data.created_at}</p>
      </div>
        
        
        
    </div>
  )
}
let main = {
  
  width: "730px",
  height: "120px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#FEFEFE",
  
}
let img = {
  width: "117px",
  height: "117px",
  borderRadius: "50%",
}
let nam = {
  fontSize: "26px"
}
let log = {
  fontSize: "16px",
  color: "#0079FF"
}
let creat = {
  fontSize: "15px",
}
