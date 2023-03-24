import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let style={
  color:"tomato",
  backgroundColor:"#0096c7"
}
let data={
  name:"foisal",
  id: 404,
}
function App() {
 
  return (
    <div className="App">
      <Heading></Heading>
      <StateCount></StateCount>
      <Card name={data.name} id={data.id}></Card>
      <ViewCard></ViewCard>
    </div>
  )
}
function Heading(){
  return(
    <div style={style}>
      <h1>Hello World</h1>
      <p>i love Allah</p>
    </div>
  )
}
function Card(props){
  return(
    <div className='styles'>
      <h1>{props.name}</h1>
      <p>{props.id}</p>
    </div>
  )
}
function ViewCard(){
  let [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);
  return(
    <>
      {
        users.map((user)=><Card name={user.name} id={user.id}></Card>)
      }
    </>
  )
}
function StateCount(){
  let [count,setCount]=useState(0);
  let increase=()=> setCount(++count);
  let decrease=()=> setCount(--count);
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>plus</button>
      <button onClick={decrease}>minus</button>
    </div>
  )
}
export default App
