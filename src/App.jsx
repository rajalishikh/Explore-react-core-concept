import './App.css';
import Todo from './Todo';

function App() {
  
  return (
    <>
      
      <Todo 
      work="React is complete BAsic" 
      isDone={true}></Todo>
      <Todo 
      work="more need to learn React" 
      isDone={false}></Todo>
      <Todo 
      work="react native complete"
       isDone={true}></Todo>
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="A+" score="11"></Student>
      <Student grade="B+" score="12"></Student>
      <Student grade="C+" score="13"></Student>
      <Device name='Phone'  price="12000"></Device>
      <Device name="Laptop" price="35000"></Device>
      <Device name="Watch"  price="3000"></Device>
      <Todo></Todo> */}
      
    </>
  )
}
// function Person(){
//   const money=25;
//   const age=20;
//   const person={name:"Raj",age:12}
//   return <p>My name is {person.name} and my age is {money + age}</p>

// }
// function Device(Props){
  
//   return(
//     <div className='border2'>
//       <h3>My Device name is : {Props.name} and price is : {Props.price}</h3>

//     </div>
//   ) 

// }
// function Student({grade,score}){
//   console.log(grade,score)
//  return(
//     <div className='border'>
//       <h2>THis is a student: is so much por and class is </h2>
//       <p>Name:{grade}</p>
//       <p>Age:{score}</p>
//     </div>
//   )

// }

export default App
// Student.propTypes = {
//   grade: PropTypes.string.isRequired, // ধরুন grade একটি string
//   score:PropTypes.number.isRequired
// };
