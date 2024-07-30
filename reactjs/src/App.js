
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import {useState} from 'react';
import{Routes, Route} from "react-router-dom"

function App() {
  const college = "KIIT"
  const [name, setName] = useState("Aditi")
  return (
<div>
 <Routes>
  <Route path= '/' element = {< ClassComponent/>}/>
  <Route path= '/fun-comp' element = {< FunctionalComponent/>}/>
 </Routes>
</div>

  
  );
}

export default App;


  // <div> 
    //     <h1>Hello World </h1>
    //    <ClassComponent/>
    //    {/* <FunctionalComponent name="Aditi" age={20} college = {college}/> */}
    //    <FunctionalComponent name={name} age={20} college = {college} setName = {setName}/> 
    // </div>