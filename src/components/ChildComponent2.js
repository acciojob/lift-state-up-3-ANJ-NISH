import React from 'react'

export const ChildComponent2 = ({selectedOption,updateOption}) => {
  return (
    <div style={{height: '200px', width: '80%',backgroundColor: 'yellow',marginTop: '0px', padding: '0px'}}>
         <h2 style={{marginTop: '30px'}}>Child Component 2</h2>
         <button onClick={()=> updateOption('Option 2')} style={{marginTop: '20px'}}>Option 2</button>
    </div>
  )
}
