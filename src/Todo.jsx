import PropTypes from 'prop-types';
// conditional rendering option 1 
// export default function Todo({work,isDone}){
//     console.log(isDone)
//     if(isDone){
//         console.log(isDone)
//         return <h1>React:{work}</h1>
//     }else{
//         return <h2>Learn More:{work}</h2>
//     }
// }
// conditional rendering option 2 
// export default function Todo({work,isDone}){
    
//     if(isDone){
//         return <h1>React:{work}</h1>
//     }
//         return <h2>Learn More:{work}</h2>
    
// }

// conditional rendering option 3 ternary operator 
// export default function Todo({work,isDone}){
    //     return(
//         <li>{isDone?"Leaning progress is":"Learning "} {work}</li>
//     )
    
// }

//conditional rendering option 4 &&  
// export default function Todo({work,isDone}){
    
//     return(
//         <li> {work} {isDone && "Done"}</li>
//     )
    
// }

// conditional rendering option 5 ||

// export default function Todo({work,isDone}){
    
//     return(
//         <li> {work} {isDone || "Do It"}</li>
//     )
    
// }

export default function Todo({work,isDone}){
    
    let listItem;
    if(isDone){
        listItem=<li>Finish:{work}</li>
    }
    else{
        listItem=<li>More read:{work}</li>
    }
    return listItem
}



// declare propTypes 
Todo.propTypes={
    work:PropTypes.string.isRequired,
    isDone:PropTypes.bool.isRequired
  
}