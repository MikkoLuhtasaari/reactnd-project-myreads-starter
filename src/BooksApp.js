import React from 'react'
import * as BooksAPI from './BooksAPI'
import './BooksApp.css'
import Book from "./Book";
import SearchBooks from './SearchBooks'
import {Route, Link} from 'react-router-dom'

const currentlyReading = "Currently Reading";
const wantToRead = "Want to Read";
const read = "Read";

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
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {this.state.books.filter((b) => (
                                                b.shelf.toLowerCase().includes(currentlyReading.toLowerCase())
                                            )).map((book) => (
                                                <li><Book book={book}/></li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {this.state.books.filter((b) => (
                                                b.shelf.toLowerCase().includes(wantToRead.toLowerCase())
                                            )).map((book) => (
                                                <li><Book book={book}/></li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {this.state.books.filter((b) => (
                                                b.shelf.toLowerCase().includes(read.toLowerCase())
                                            )).map((book) => (
                                                <li><Book book={book}/></li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="open-search">
                            <Link
                                to='/search'>
                                Add a book
                            </Link>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
