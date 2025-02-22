import PropTypes from 'prop-types';
import Book from './Book';
export default function Books({All_inFo_Book}){
    return(
        <div>
            <p>Books:{All_inFo_Book.length}</p>
            {
                All_inFo_Book.map((item)=><Book key={item.id} single_Book={item} ></Book>)
            }
            
        </div>
    )
}
Books.propTypes={
    All_inFo_Book:PropTypes.object.isRequired
}