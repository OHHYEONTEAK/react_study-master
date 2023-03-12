import React, {useReducer} from 'react';


// 3. useReducer()의 두번째 파라미터 initialState 초기값 준비! 
const initialState = { count: 0}

// 2. useReducer()의 첫번째 파라미터 reducer()함수 준비! 
function reducer(state, action){
 switch(action.type){
    case "INCREMENT": 
        return state.count<action.max?{count: state.count+action.step}:state;
    case "DECREMENT":
        return state.count>action.min?{count:state.count-action.step}:state;
    case "RANDOM":
        return{count:Math.floor(Math.random()*(action.max-action.min))+action.min}; 
    default:
        throw new Error("지원하지 않는 action type 입니다:", action.type);         
 }
}




function ReducerCounter({ step=1, min=0, max=10}){

    // 1. useReducer() 작성 - 상단에 준비시킨 파라미터 reducer() 와 initialState 사용! 
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return(
        <>
            <p>증감숫자범위: {step} <br></br>최소:{min} 최대:{max} </p>
            <h2>{state.count}</h2>
            <button onClick={()=>{dispatch({type:"INCREMENT", step, max})}}>증가</button>&nbsp;
            <button onClick={()=>{dispatch({type:"DECREMENT", step, min})}}>감소</button>&nbsp;
            <button onClick={()=>{dispatch({type:"RANDOM", min, max})}}>랜덤</button>&nbsp;
            <button onClick={()=>{dispatch({type:"RESET"})}}>최소화</button>
        
        </>
    )


}

export default ReducerCounter;