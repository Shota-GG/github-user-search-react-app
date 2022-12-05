import React from 'react'

export default function MainBox(props) {
    console.log(props);
  return (
    <div>
        <img src={props.data.avatar_url} alt="" />
        <h1>{props.data.name}</h1>
        <p>{props.data.login}</p>
        <p></p>
        <p>{props.data.created_at}</p>
    </div>
  )
}
