
import React, { useState } from "react";
import './../styles/App.css';
import { ChildComponent1 } from "./ChildComponent1";
import { ChildComponent2 } from "./ChildComponent2";

const App = () => {

  const [selectedOption, setSelectedoption]=useState("");

  function updateOption(option)
  {
    setSelectedoption(option);
  }


  return (
    <div className="parent" style={{height: '100%', width: '100%', backgroundColor: 'limegreen', margin: '0px', padding: '0px'}}>
       <h1 style={{marginBottom: '30px',}}>Parent Component</h1>
       <ChildComponent1 selectedOption={selectedOption} updateOption={updateOption} style={{marginBottom: '0px'}}/>
       <ChildComponent2 selectedOption={selectedOption} updateOption={updateOption} style={{marginTop: '0px'}}/>

      <p style={{marginTop: '15px',}}>Selected Option: {selectedOption}</p>

    </div>
  )
}

export default App
