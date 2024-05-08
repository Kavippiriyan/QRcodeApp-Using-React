import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './component/demo';
import Student from './component/student';
import Usercard from './component/QRcode';

const App: React.FC = () => {

  // const array =[
  //   {
  //     name:"kavi",age:22
  //   },
  //   {
  //     name:"k7",age:22
  //   }
  // ]

  const handleclick = () => {
    alert("button clicked")
  }
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {/* <Student  age={22}/> */}
      {/* <Student name='Kavippiriyan'age={22}></Student> */}
      {/* <Student array={array}/> */}
      {/* <Student handleclick={handleclick}/> */}
      <Usercard />
    </div>
  );
}

export default App;
