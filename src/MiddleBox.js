import React from 'react'

export default function MiddleBox(props) {
  return (
    <div style={props.click ? {...middle, backgroundColor: "#141D2F", color: "#ffffff"} : {...middle, backgroundColor: "#F6F8FF"}}>
        <div>
            <p style={{fontSize: "13px"}}>Repos</p>
            <h1 style={{fontSize: "22px"}}>{props.data.public_repos}</h1>
        </div>
        <div>
            <p style={{fontSize: "13px"}}>Followers</p>
            <h1 style={{fontSize: "22px"}}>{props.data.followers}</h1>
        </div>
        <div>
            <p style={{fontSize: "13px"}}>Followers</p>
            <h1 style={{fontSize: "22px"}}>{props.data.following}</h1>
        </div>
     </div>
  )
}
let middle = {
    width: "480px",
    height: "85px",
    borderRadius: "10px",
    backgroundColor: "#F6F8FF",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "202px",
    lineHeight: "40px"
}
