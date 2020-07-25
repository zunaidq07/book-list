import React, { useContext } from 'react'
import BookContext from '../context/bookContext'

export const NavBar = () => {
    const { books } = useContext(BookContext)
    return (
        <div className="navbar">
            <h1>My BookList</h1>
            <p>I have {books.length} books to go through</p>
        </div>
    )
}

export default NavBar
