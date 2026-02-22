import React from "react";
import "./App.css";
import { useState } from "react";
import Men from './components/Men'
import Women from './components/Women'

// const App = () => {
//   const [isOn, setIsOn] = useState(false);
//   const setToggle = ()=>{
//     setIsOn((prev)=>{
//       return !prev
//     })
//   }
//   return <div>
//     <button onClick={setToggle}>
//       Click To Toggle
      
//     </button>

//     <h2>{isOn?<Men/>:<Women/>}</h2>
//   </div>;
// };
// const App =  () =>{

//      let product = {
//       title : 'Mobile',
//       price: '12000',
//       categories : 'Real me'
//     }
//     let product2 = {
//       title:'Laptop',
//       price:14000,
//       categories:'Dell'
//     }
//   return <div>
//     <Men product={product}/>
//     <Men product={product2}/>
//   </div>
// }

//  store input field using usestate
// const App = () =>{
//   const [field, setField] = useState('');

//   const submitHandler = (e)=>{
//     e.preventDefault();
//     console.log('submitted')
//     setField(e.target.value = '')

//   }
//   return <div>
//     <form onSubmit={submitHandler}>
//     <input
//     type="text" 
//     placeholder="Enter Text"
//     value={field}
//     onChange={(e)=>{
//       setField(e.target.value)
//     }}
//     />

//     <button type="submit" >Submit</button>
//     </form>
//   </div>
// }

const App = () =>{

  const initialState = 0;
  const [count, setCount] = useState(initialState)
  return <div>
    <h2>{count}</h2>
    <button onClick={()=>{
      setCount(count+1);
    }}>Plus 1</button>
    <button onClick={()=>{
      setCount(initialState);
    }}>Minus 1</button>
  </div>
}


export default App;
