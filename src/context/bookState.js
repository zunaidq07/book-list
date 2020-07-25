import React, { useReducer } from 'react'
import BookContext from './bookContext'
import bookReducer from './bookReducer'

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
        ]
    )

    // const addBook = (title, author) => {
    //     setBooks([...books, {title: title, author: author, id: uuid()}])
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter((book) => book.id !== id))
    // }

    return(
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider

