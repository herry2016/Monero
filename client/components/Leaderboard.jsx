import React, { Component } from 'react'
import UserEntry from './UserEntry.jsx'

function Leaderboard(props) {
  return (
    <div>
      {props.userList.sort(function(b,a){return a.totalhashes - b.totalhashes}).map((user, index) => (
        <UserEntry user={user} key={index} />
      ))}
    </div>
  )
}

export default Leaderboard