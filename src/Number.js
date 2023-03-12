import React, { useEffect, useState } from "react";

const Number = () => {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState('변경전 이름')
    useEffect( () => {console.log('hello');},[name] ); //number버튼, name 버튼 둘다 변경되면 hello 계속출력
    // useEffect( () => {console.log('hello');} , []); // 처음 렌더링시에만 hello 출력 
    // useEffect( () => {console.log('hello');} , [name]); // name 변경버튼클릭시만 hello 출력

    const counter = () => setNumber(number+1);
    const nameChanger = () => setName('변경후 이름');
    

    return(
        <div>
            <button onClick={counter}>클릭</button>
            <button onClick={nameChanger}>변경</button>
            <div>{number}</div>
            <div>{name}</div>
        </div>
    );
};

export default Number;