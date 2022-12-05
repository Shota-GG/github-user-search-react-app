import React from 'react'

export default function MiddleBox(props) {
  return (
    <div style={middle}>
        <div>
            <p>Repos</p>
            <h1>{props.data.public_repos}</h1>
        </div>
        <div>
            <p>Followers</p>
            <h1>{props.data.followers}</h1>
        </div>
        <div>
            <p>Followers</p>
            <h1>{props.data.following}</h1>
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
    marginLeft: "202px"
}
