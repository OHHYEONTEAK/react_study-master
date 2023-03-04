import React from 'react';

function ArrayAdd({username, email, onInputChange, onCreateClick}){

  return(
    <div>
      <input 
      name="username"
      placeholder="계정명"
      onChange={onInputChange}
      value={username}
      />

      <input
      name="email"
      placeholder="이메일"
      onChange={onInputChange}
      value={email}
      />

      <button onClick={onCreateClick}>등록</button>

    </div>
  )
}

export default ArrayAdd;
