import React from "react";
import ContextSample from './ContextSample'


function App(){

  return(
    <ContextSample/>
  )
}
export default App;








// //   [UerList, ArrayAdd 구현 ]  - 2. useReducer 함수로 구현 


// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';



// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }


// // 2. useReducer() 의 두번째 파라미터 initialState : 기존코드 useState(초기값정의) 함수를 사용한 배열2개 : inputs 배열과 users배열의 초기값을 initialState 변수에 넣어둠 
// const initialState = {
//   inputs:{ username: '', email: ''},
//   users: [ { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//            { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//            { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//          ]
// };

// // 3. useReducer() 의 첫번째 파라미터 reducer:  
// function reducer(state, action) {
//   switch (action.type) {
//       case 'CHANGE_INPUT':
//         return { ...state,
//                   inputs: { ...state.inputs, 
//                             [action.name]: action.value
//                           }
//         };
//       case 'CREATE_USER':
//         return { inputs: initialState.inputs,
//                  users: state.users.concat(action.user)   
//         };
//       case 'TOGGLE_USER':
//         return { ...state,
//                  users: state.users.map(user =>
//                       user.id === action.id ? { ...user, active: !user.active } : user
//                       )
//         };
//     case 'REMOVE_USER':
//       return {  ...state,
//                 users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState); 
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;
//   console.log(state);

//   const handleInputChange  = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT', 
//       name, 
//       value
//     });
//   }, []);

//   const handleCreateClick  = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const handleToggleClick  = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const handleDeleteClick  = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onInputChange={handleInputChange }
//         onCreateClick={handleCreateClick }
//       />
//       <UserList propUsers={users} toggleClick={handleToggleClick } deleteClick={handleDeleteClick } />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;











// // 스마트홈 예제 
// import React from "react";
// import SmartHome from "./SmartHome";
// import './App.css';

// function App(){

//   return(

//     <div className="App-header">
//       <h3>My Smart Home Light</h3>
//       <SmartHome/>

//     </div>
  
//   )
// }

// export default App;





// // 커스텀훅스 예제 
// //  [UerList, CreateUser구현  - 2. useReducer 함수로 구현 


// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';
// import useInputs from './useInputs'; 



// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }


// // 2. useReducer() 의 두번째 파라미터 initialState : 기존코드 useState(초기값정의) 함수를 사용한 배열2개 : inputs 배열과 users배열의 초기값을 initialState 변수에 넣어둠 
// const initialState = {
//   // inputs:{ username: '', email: ''},
//   users: [ { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//            { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//            { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//          ]
// };

// // 3. useReducer() 의 첫번째 파라미터 reducer:  
// function reducer(state, action) {
//   switch (action.type) {
//       // case 'CHANGE_INPUT':
//       //   return { ...state,
//       //             inputs: { ...state.inputs, 
//       //                       [action.name]: action.value
//       //                     }
//       //   };
//       case 'CREATE_USER':
//         return { inputs: initialState.inputs,
//                  users: state.users.concat(action.user)   
//         };
//       case 'TOGGLE_USER':
//         return { ...state,
//                  users: state.users.map(user =>
//                       user.id === action.id ? { ...user, active: !user.active } : user
//                       )
//         };
//     case 'REMOVE_USER':
//       return {  ...state,
//                 users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState); 

//   const [form, handleInputChange, reset] =useInputs({
//     username:'',
//     email:''
//   })

//   const {username, email} =form

//   // const { username, email } = state.inputs;
//   const { users } = state;


//   const nextId = useRef(4);


//   console.log(state);

//   // const handleInputChange  = useCallback(e => {
//   //   const { name, value } = e.target;
//   //   dispatch({
//   //     type: 'CHANGE_INPUT', 
//   //     name, 
//   //     value
//   //   });
//   // }, []);

//   const handleCreateClick  = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     reset();
//     nextId.current += 1;
//   }, [username, email, reset]);

//   const handleToggleClick  = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const handleDeleteClick  = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onInputChange={handleInputChange }
//         onCreateClick={handleCreateClick }
//       />
//       <UserList propUsers={users} toggleClick={handleToggleClick } deleteClick={handleDeleteClick } />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;











// //   [UerList, ArrayAdd 구현 ]  - 2. useReducer 함수로 구현 


// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';



// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }


// // 2. useReducer() 의 두번째 파라미터 initialState : 기존코드 useState(초기값정의) 함수를 사용한 배열2개 : inputs 배열과 users배열의 초기값을 initialState 변수에 넣어둠 
// const initialState = {
//   inputs:{ username: '', email: ''},
//   users: [ { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//            { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//            { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//          ]
// };

// // 3. useReducer() 의 첫번째 파라미터 reducer:  
// function reducer(state, action) {
//   switch (action.type) {
//       case 'CHANGE_INPUT':
//         return { ...state,
//                   inputs: { ...state.inputs, 
//                             [action.name]: action.value
//                           }
//         };
//       case 'CREATE_USER':
//         return { inputs: initialState.inputs,
//                  users: state.users.concat(action.user)   
//         };
//       case 'TOGGLE_USER':
//         return { ...state,
//                  users: state.users.map(user =>
//                       user.id === action.id ? { ...user, active: !user.active } : user
//                       )
//         };
//     case 'REMOVE_USER':
//       return {  ...state,
//                 users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState); 
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;
//   console.log(state);

//   const handleInputChange  = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT', 
//       name, 
//       value
//     });
//   }, []);

//   const handleCreateClick  = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const handleToggleClick  = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const handleDeleteClick  = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onInputChange={handleInputChange }
//         onCreateClick={handleCreateClick }
//       />
//       <UserList propUsers={users} toggleClick={handleToggleClick } deleteClick={handleDeleteClick } />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;









// //  강의 [UerList, ArrayAdd 구현 ]   - 1. useState 함수로 구현 
// // useMemo(), useCallback(), React.memo() 예제 
// import React,{useState, useRef, useMemo, useCallback} from "react";
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';

// function App(){

//   function countActiveUsers(users){
//     console.log("빨간색의 활성상태 유저명수 계산중...")
//     return users.filter(user=> user.active).length;
//   }

//   const [inputs, setInputs] = useState({username: "", email:""})
//   const{username, email} = inputs;
 
//   const handleInputChange = useCallback( e => {
//           // e.target은 onChange이벤트가 설정된 input태그를 가리킴
//           const {name, value} = e.target; 
//           setInputs({
//             ...inputs,
//             [name]: value 
//           })
//          }, [inputs]
//   )

//   const [users, setUsers] = useState([
//     { 
//       id: 1,
//       username: 'user1',
//       email: 'user1@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'user2',
//       email: 'user2@gmail.com',
//       active: false

//     },
//     {
//       id: 3,
//       username: 'user3',
//       email: 'user3@gmail.com',
//       active: false
//     }
//   ]); 

//   const nextId =useRef(4)

//   // useCallback 을 쓰는 이유  (= 함수 재사용과 관련 !! )
//   // : useCallback 을 사용하지 않으면 컴포넌트가 리렌더링 될때마다, 함수들이 새로만들어짐. 
//   //  그러나 useCallback 을 사용하게 되면 한번 만든 함수를 필요할때만 새로만들고 (재사용이 가능해진다!) - 최적화

//   const handleCreateClick = useCallback(
//       ()=>{
//           const user = {
//             id: nextId.current,
//             username,
//             email
//           }

         
//         // setUsers([...users, user])  
//         setUsers(users => users.concat(user))

//         setInputs({
//             username: "",
//             email: ""
//         })  
      
//         nextId.current +=1;
//     } , [ username, email]
//   )

//   const handleDeleteClick = useCallback( id => {
//               setUsers(users.filter(user => user.id!==id));
//             }, [users]

//  )
 
//  const handleToggleClick = useCallback( (id) => { 
//             setUsers(users.map( user => user.id===id?{...user, active: !user.active}:user)) 
//              } , [users]
//  )
//  const count = useMemo(()=>countActiveUsers(users),[users]);

//  return(
//   <>
//     <ArrayAdd
//       username={username}
//       email={email}
//       onInputChange={handleInputChange}
//       onCreateClick={handleCreateClick}
//     />

//     <UserList propUsers={users} onDelete={handleDeleteClick} toggleClick={handleToggleClick}/>
//     <div> 활성사용자 수 : {count} </div>
//   </> 
//  )
// }

// export default App;






// import './App.css';
// import React from "react";
// import UserList1 from './UserList1';
 
//  function App(){
  // const users = [
  //   { 
  //     id: 1,
  //     username: 'user1',
  //     email: 'user1@gmail.com'
  //   },
  //   {
  //     id: 2,
  //     username: 'user2',
  //     email: 'user2@gmail.com'

  //   },
  //   {
  //     id: 3,
  //     username: 'user3',
  //     email: 'user3@gmail.com'
  //   }
  // ] 

//    return(
//     <UserList1 users={users}/>
//    );
//  }

//   export default App;

  

// ArrayRender1


// import './App.css';
// import React from "react";
// import ArrayRender1 from './ArrayRender1';
 
//  function App(){
//    return(
//     <ArrayRender1/>
//    );
//  }

//   export default App;


// 5. InputState 
// import './App.css';
// import React from "react";
// import InputState from './InputState';
 
//  function App(){
//    return(
//     <InputState/>
//    );
//  }

//   export default App;





// 04 - useState - 버튼 동적구현 
// function App(){
//   return (<Counter/> )
// }

// export default App;



// 03 - props : 두 컴포넌트 사이에 데이터 전송 테스트

// function App(){
//   return (<Hello name='react' color='red'/> )
// }

// export default App;




// 02 - 컴포넌트 export, import 연습
 
// function App(){
//   return <MyComponent/>;
// }

// export default App;



// 01 - JSX 테스트 
// function App() {

//   const text = 'JSX & React project!'  

//   return (
//     <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       {text}
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
//   );
// }


// export default App;










// import React from 'react';
// import Game from './Game';

// function App(){

//   return(
//     <Game/>
//   )
// }

// export default App








// import React from "react";
// import ReducerCounter from "./ReducerCounter";


// function App(){

//   return(
//     <div>
    
//       <ReducerCounter />
//       <ReducerCounter step={1} min={-3} max={5}/>
//       <ReducerCounter step={5} min={-10} max={10}/>

//     </div>
//   )

// }

// export default App;











// // [MathQuiz] - useRef , useState 연습

// import React from "react";
// import MathQuiz from "./MathQuiz";
// import "./App.css";
// function App(){

//    return(
//     <MathQuiz/>
//    )

// }

// export default App;








// // useRef() 와 useEffect() 예제 
// import React, {useEffect, useRef} from "react";
// import './App.css';

// function App(){
//   const inputRef = useRef()

//   useEffect(()=>{
//      console.log(inputRef);
//     inputRef.current.focus();
//    }, []  // 2. [] 의미:  웹사이트에 들어오자마자 첫화면에서 렌더링될때 id 인풋창에 포커스가 된상태로 뜨게 추가구현 
//   )

//   const loginAlert= () =>{
//     alert('Welcome!');
//     inputRef.current.focus(); // 1. useEffect()함수없이, 즉 주석처리후 useRef()만쓰면 alert팝업창 확인누른후에만 포커스발생! 
//   }

//   return(
//    <div className="App"> 
//      <header className="App-header">
//         <input  ref={inputRef}  type="text" placeholder="id"/>
//         <input   type="text" placeholder="password"/>
//         <button onClick={loginAlert}>Login</button>
//      </header>
//    </div>
//   )

// }

// export default App;



// useEffect 예제2. 

// import React from "react";
// import Number from "./Number";

// function App(){

//   return(
//     <Number/>
//   )

// }

// export default App;



// useEffect 예제1. 

// import React from "react";
// import UseEffect from "./UseEffect";

// function App(){

//   return(
//     <UseEffect/>
//   )
// }

// export default App;