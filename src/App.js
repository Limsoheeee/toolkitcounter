import React, { useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import {increment,decrement,  incrementByAmount} from "./slice/counterSlice"


function App() {
  const counter = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  const [num,setNum] = useState("");
  const onChangeHandler = (e) =>{
    const{value} = e.target;
    setNum(value);
    console.log(num)
  };

  //액션페이로드해서 num보내기
  const onClickSubmit =() =>{
    dispatch(incrementByAmount(parseInt(num)));
    setNum("");
  }
  
  return (
    <div>
      <p>{counter}
      </p>
      <button
    onClick = {()=>{dispatch(increment())}}
      >+1</button>
    <button
    onClick = {()=>dispatch(decrement())}  
        >-1</button>
      <input type="text"  onChange={(e)=>onChangeHandler(e)}/>
      <button onClick={onClickSubmit}>submit</button>
    </div>
  );
}

export default App;
