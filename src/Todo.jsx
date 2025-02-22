import PropTypes from 'prop-types';
export default function Todo({work,isDone}){
    console.log(isDone)
    if(isDone){
        console.log(isDone)
        return <h1>React:{work}</h1>
    }else{
        return <h2>Learn More:{work}</h2>
    }
}

Todo.propTypes={
    work:PropTypes.string.isRequired,
    isDone:PropTypes.bool.isRequired
  
}