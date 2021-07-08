import React, {useEffect,useState, useReducer,useRef} from 'react';

export function Example1(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  );
}

export function Example2(){
  const[count, setCount] = useState(0);

  useEffect(()=>{
      document.title = `You clicked ${count} times`;
  });
  return(
    <div>
      <p>Update document title:</p>
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    </div>
  );
}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}
export function Example3 (){
  const initialState = {count: 0};
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <p>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </p>
  );
}
export function Example4(){
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` ekrandaki text input elemanına işaret eder
    inputEl.current.focus();
  };
  return (
    <p>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </p>
  );
}