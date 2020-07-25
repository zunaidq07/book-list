import React, { useContext } from 'react'
import BookContext from '../context/bookContext'

export const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext)
    return (
        <div className="book-details">
            <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
                <div className="title">{ book.title }</div>
                <div className="author">{ book.author }</div>
            </li>
        </div>
    )
}

export default BookDetails
