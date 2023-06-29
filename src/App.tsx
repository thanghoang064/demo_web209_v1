import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Button from './components/Button';
import Train from './components/Train';
import { Dispatch } from 'redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { increaseCountAction } from './store/counter/action';
import { ICounterState } from './store/counter/reducer';
import ComponetA from './components/componentA';
import ComponetB from './components/componentB';
import Dashboard from './components/train/Dashboard';
import SinhVien from './components/train/SinhVien';

function App() {
  // const [count, setState] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ComponetB />
        <ComponetA />
       {/*<Button name='on change' type={1} onHandler={increase}/>*/}
       {/* <Login /> */}
        {/* <Train/> */}
        {/*<SinhVien></SinhVien>*/}
      </header>
      <section>
        <Dashboard></Dashboard>
      </section>
    </div>
  );
}

export default App;
