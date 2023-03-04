import React from "react";

function ArrayRender1(){
  const users = [
    { 
      id: 1,
      username: 'user1',
      email: 'user1@gmail.com'
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@gmail.com'

    },
    {
      id: 3,
      username: 'user3',
      email: 'user3@gmail.com'
    }
  ]

  return(
    <div>
      <div>
        <b>{users[0].username}</b><span>({users[0].email})</span>
      </div>
      <div>
      <b>{users[1].username}</b><span>({users[1].email})</span>
      </div>
      <div>
      <b>{users[2].username}</b><span>({users[2].email})</span>
      </div>

    </div>
  )

}

export default ArrayRender1

