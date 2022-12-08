import React from 'react'

export default function MainBox(props) {
  return (
    <div style={props.click ? {...main, backgroundColor: "#1E2A47", color: "#ffffff"} : {...main, backgroundColor: "#FEFEFE"}}>
      <div>
        <img style={img} src={props.data.avatar_url} alt="" />
      </div>
      <div style={{lineHeight: "30px"}}>
        <h1 style={nam}>{props.data.name}</h1>
        <p style={log}>@{props.data.login}</p>
        {props.data.bio==null ? <p>This profile has no bio</p> : <p>{props.data.bio}</p>}
      </div>
      <div>
        <p style={creat}>joined {(new Date(props.data.created_at).toLocaleString('en-GB', { year:"numeric",  day:"numeric", month:"short",}))
        // .toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
        }
        </p>
      </div>
        
      {/* new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})  */}
        
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
