import "./style.css"
import React from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { countDe , countIn} from "./redux/action";

function App() {
  const dispatch = useDispatch()
  const myStore = useSelector(state => state.reducer) 
  console.log(myStore)
  return (
    <div className="div">
      <button onClick={()=> dispatch(countIn())}>+</button>
      <span className="span">
      {myStore.length === 0 ? 0 : myStore[0].count}
      </span>
      <button onClick={()=> dispatch(countDe())}>-</button>
    </div>
  );
}

export default App;
