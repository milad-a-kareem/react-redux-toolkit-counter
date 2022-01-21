import {  useSelector, useDispatch } from 'react-redux'
import './App.css';

import { counterActions } from './store/counter-slice'
import { visibilityActions } from './store/visibility-slice'

function App() {
  const counter = useSelector(state => state.counter.counter)
  const isHidden = useSelector(state => state.visibility.isHidden)

  const dispatch = useDispatch()

  const increseBy=()=>{
    dispatch(counterActions.increseby(10))
  }
  const increment=()=>{
    dispatch(counterActions.inc())
  }
  const decrement=()=>{
    dispatch(counterActions.dec())
  }

  const toggle =()=>{
    dispatch(visibilityActions.toggleVisibility())
  }


  return (
    <div className="App">
      <button onClick={toggle}>toggle visibility</button>
      {
        isHidden ? null : (<div>
          <h1>{counter}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={increseBy}>increse by 10</button>
          <button onClick={decrement}>decrement</button>
  
        </div>)
      }
      
    </div>
  );

}

export default App;