

import React,{useState, useRef} from "react";
import UserList from './UserList';
import ArrayAdd from './ArrayAdd';

function App(){

  const [inputs, setInputs] = useState({username: "", email:""})
  const{username, email} = inputs;
 
  const handleInputChange = e => {
      // e.target은 onChange이벤트가 설정된 input태그를 가리킴
      const {name, value} = e.target; 
      setInputs({
        ...inputs,
        [name]: value 
      })
  }

  const [users, setUsers] = useState([
    { 
      id: 1,
      username: 'user1',
      email: 'user1@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@gmail.com',
      active: false

    },
    {
      id: 3,
      username: 'user3',
      email: 'user3@gmail.com',
      active: false
    }
  ]); 

  const nextId =useRef(4)
  const handleCreateClick = ()=>{
    const user = {
      id: nextId.current,
      username,
      email
    }

  setUsers(users.concat(user))
  setInputs({
    username: "",
    email: ""
  })  
 
  nextId.current +=1;
  }

 const handleDeleteClick = id =>{
  setUsers(users.filter(user => user.id!==id));
 }
 
 const handleToggleClick = (id) => { 
        setUsers(users.map( user => user.id===id?{...user, active: !user.active}:user)) 
 }

 return(
  <>
    <ArrayAdd
      username={username}
      email={email}
      onInputChange={handleInputChange}
      onCreateClick={handleCreateClick}
    />

    <UserList propUsers={users} onDelete={handleDeleteClick} toggleClick={handleToggleClick}/>
  </> 
 )
}

export default App;






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
