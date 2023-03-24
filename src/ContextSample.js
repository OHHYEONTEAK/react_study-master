// 방법1. - contextAPI 사용하지 않을때 
// 문제점: 여러 중간 컴포넌트를 통해 PROPS를 반복해서 작성하여 마지막 하위컴포넌트로 전달하는 번거로움 
// import React from "react" ;

// function Child({text3}) {
//     return <p>{text3}</p> 
// }

// function Parent({text2}) {
//     return <Child text3={text2} />
// }

// function GrandParent({text1}) {
//     return <Parent text2={text1} />
// }

// function ContextSample() {
//     return (
//         <GrandParent text1=" (1) props에 담는 문장 " />
//     )
// }

// export default ContextSample;







// 방법2. - contextAPI 사용할때  
// 편리함: 여러 불필요한 중간 컴포넌들을 거치지 않고 마지막 목적지 하위컴포넌트에 PROP 데이터를 바로 던져줌 
// import React, { createContext, useContext} from "react" ;

// const MyContext = createContext('defaultValue');



// function Child() {
//     const text = useContext(MyContext)
//     return <div> {text}</div>
// }

// function Parent() {
//     return <Child />
// }

// function GrandParent() {
//     return <Parent />
// }

// function ContextSample() {
    
   
//      // 1. useState에서 value데이터를 관리하는데, 초기값이 true여서 삼항연산자에서 초기값은 true 결과를 반환
//     return (
//         <MyContext.Provider value=" (2) props에 담는 문장">
//             <GrandParent/>   
//         </MyContext.Provider>
//     )
// }

// export default ContextSample;







// 방법3. - contextAPI 사용하고 useState를 통해 초기값, 업데이트값 상태관리 까지 해보기 
import React, { useState,createContext, useContext} from "react" ;

const MyContext = createContext('defaultValue');



function Child() {
    const text = useContext(MyContext)
    return <div> {text}</div>
}

function Parent() {
    return <Child />
}

function GrandParent() {
    return <Parent />
}

function ContextSample() {
    
    const [data, setData] = useState(true)
     // 1. useState에서 value데이터를 관리하는데, 초기값이 true여서 삼항연산자에서 초기값은 true 결과를 반환
    return (
        <MyContext.Provider value={data ? "(3) true일때 props에 넣을 문장" : "(3) false일때 props에 넣을 문장"}>
        <GrandParent />
        {/* 2. 버튼클릭시 setValue 업데이트함수로 value 값이 true, false 등반전이 된다.  */}
        <button onClick={() => setData(!data)}> true/false 버튼</button>
        </MyContext.Provider>
    )
}

export default ContextSample;
