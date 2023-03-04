import React from "react";

function User({user}){
  return(
    <div>
      <b>{user.username}</b><span>{user.email}</span>
    </div>
  );
}



 function ArrayRender2(){
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
      <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/>
    </div>
  )

 }

 export default ArrayRender2