import React, { useEffect, useState } from "react";

function UseEffect() {
  const [name, setName] = useState("변경전 닉네임");

  useEffect(() => {
    console.log("컴포넌트 나타남");
    console.log(name); // 초기 닉네임 // 닉네임 변경
    return () => {
      console.log("컴포넌트 사라짐");
    };
  });

  const onClick = () => {
    setName("변경후 닉네임");
  };
  return (
    <div>
      {name} <button onClick={onClick}>변경</button>
    </div>
  );
}

export default UseEffect;