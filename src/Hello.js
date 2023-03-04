import React from "react";


// 3. 비구조화(=구조분해) 방식 
function Hello({color, name}){
  return <div style={{color}}>안녕하세요{name}</div>
}

export default Hello;


// function Hello(props){
//   // 1. props - 콘솔에 출력
//   console.log(props);

//   // 2. props - 브라우저에 출력
//   return <div style={{color: props.color}}>안녕하세요{props.name}</div>
// }

// export default Hello;