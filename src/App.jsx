import './App.css';

function App() {
  
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="A+" class="11"></Student>
      <Student grade="B+" class="12"></Student>
      <Student grade="C+" class="13"></Student>
      <Device name='Phone'  price="12000"></Device>
      <Device name="Laptop" price="35000"></Device>
      <Device name="Watch"  price="3000"></Device>
      
    </>
  )
}
function Person(){
  const money=25;
  const age=20;
  const person={name:"Raj",age:12}
  return <p>My name is {person.name} and my age is {money + age}</p>

}
function Device(Props){
  
  return(
    <div className='border2'>
      <h3>My Device name is : {Props.name} and price is : {Props.price}</h3>

    </div>
  ) 

}
function Student(Props){
  console.log(Props)
  return(
    <div className='border'>
      <h2>THis is a student:</h2>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )

}

export default App
