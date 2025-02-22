import PropTypes from 'prop-types';
export default function Actor({name2}){
    console.log(name2.name)
   
    return(
        <div>
            <p>name:{name2.name}</p>
            <p>town :{name2.town}</p>
         </div>
    )
}
Actor.propTypes={
    name2:PropTypes.object.isRequired
}