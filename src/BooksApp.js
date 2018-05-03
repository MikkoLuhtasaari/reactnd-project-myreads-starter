import React from 'react'
import * as BooksAPI from './BooksAPI'
import './BooksApp.css'
import Book from "./Book";
import SearchBooks from './SearchBooks'
import {Route, Link} from 'react-router-dom'
import MyReads from './MyReads'

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                books
            }))
        });
    }

    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then((book) => {
            BooksAPI.getAll().then((books) => {
                this.setState(() => ({
                    books
                }))
            })
        })
    };

    render() {
        return (
            <div className="app">

                <Route path='/search' render={() => (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <Link className="close-search" to='/'>Close</Link>
                            <div className="search-books-input-wrapper">
                                <input type="text" placeholder="Search by title or author"/>
                                <SearchBooks books={this.state.books}/>
                                {this.state.books.map((book) => (
                                    <Book key={book.id} book={book}></Book>
                                ))}
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                )}/>

                <Route exact path='/' render={() => (
                    <MyReads
                        books={this.state.books}
                        onUpdateBookShelf = {(book, shelf) => {
                            this.updateBookShelf(book, shelf);
                        }}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
