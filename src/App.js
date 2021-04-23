import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function InputC(props) {
  console.log(props);
  return (
    <div>
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.val}
      ></input>
    </div>
  );
}

function withProp(Comp) {
  return function (props) {
    return <Comp {...props} color='red' />;
  };
}
const ColorInput = withProp(InputC);
function App() {
  const [val, setVal] = useState('');
  const onChange1 = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };
  return (
    <div className='App'>
      <ColorInput />
      {/* <InputC placeholder='Enter Name' onChange={onChange1} val={val} /> */}
      {/* <Input placeholder='Enter Compnay Name' /> */}
    </div>
  );
}

export default App;
