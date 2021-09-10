import React, {useState} from 'react';
import {connect} from "react-redux";
import { decrement, increment } from './actions/countActions';
import store from './store';
import {useSelector} from "react-redux";

function App() {

  const counter = useSelector(state => state.count);

  return (
      <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={() => store.dispatch(increment(5))}>add</button>
        <button onClick={() => store.dispatch(decrement(5))}>decrement</button>
      </div>

  );
}

export default App
