import PropTypes from 'prop-types';
export default function Book({ single_Book}){
    const{Book_name,price}=single_Book
    return(
        <div>
            <li>Name:{Book_name}</li>
            <li>Price: {price}</li>
        </div>
       
    )
}
Book.propTypes={
    single_Book:PropTypes.object.isRequired
}