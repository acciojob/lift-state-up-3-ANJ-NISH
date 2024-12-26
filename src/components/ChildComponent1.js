import React from 'react'

export const ChildComponent1 = ({selectedOption,updateOption}) => {
    

  return (
    <div style={{height: '200px', width: '80%',backgroundColor: 'brown', marginBottom: '0px', padding: '0px'}}>
         <h2 style={{marginTop: '30px'}}>Child Component 1</h2>
         <button onClick={()=> updateOption('Option 1')} style={{marginTop: '20px'}}>Option 1</button>
    </div>
  )
}
