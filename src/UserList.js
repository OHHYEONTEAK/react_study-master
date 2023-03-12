import React, { useEffect } from "react";

function User({PropUser, onDeleteClick, onToggleClick}){
  //  console.log(PropUser)
  
  // 2. propUser작성의 반복을 피하는 방법 - 비구조(구조분해)
  const {username, email, id, active } = PropUser
  useEffect(
    ()=>{
      console.log("화면에 나타남"); //mount: 초기화면 렌더링 + 등록버튼 클릭시
      return()=>{console.log("화면에 사라짐")} //unmount: 삭제버튼 클릭시
    } ,[]
  )

  return(
    <div>
      <b style={{cursor:'pointer', color:active?'red':'black'}} onClick={()=>{onToggleClick(id)}}>{username}</b>
      <span>({email})</span>
      <button onClick={()=>onDeleteClick(id)}>삭제</button>
    </div>
  );

  // 1. propUser작성을 반복해서 적는 방법 
  // return(
  //   <div>
  //     <b>{PropUser.username}</b><span>({PropUser.email})</span>
  //     <button onClick={()=>onDeleteClick(PropUser.id)}>삭제</button>
  //   </div>
  // );
}


function UserList({propUsers, onDelete, toggleClick}){
  // console.log(propUsers)
 return(
  <div>
                    {/* User 라는 하위컴포넌트(파라미터)에 PropUser, key, onDeleteClick 라는 props 이름으로 전송  */}
                    {/* 화살표함수의 축약형 */}
    {propUsers.map( u => (<User PropUser={u} key={u.id} onDeleteClick={onDelete}  onToggleClick={toggleClick}/>) )
    }

  </div>
 );
}

export default React.memo(UserList);