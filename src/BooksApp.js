import React from 'react'
import * as BooksAPI from './BooksAPI'
import './BooksApp.css'
import Book from "./Book";
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
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

    searchBooks = (query) => {
        BooksAPI.search(query).then((books) => {
            this.setState(() => ({
                books
            }))
        })
    };

    render() {
        return (
            <div className="app">

                <Route path='/search' render={() => (
                    <div>
                        <SearchBooks
                            books={this.state.books}
                            onUpdateQuery={(query) => {
                                this.searchBooks(query)
                            }}
                        />
                        {this.state.books.length > 0 &&
                        <div className="search-books-results">
                            <ol className="books-grid">
                                {this.state.books.map((book) => (
                                    <Book key={book.id} book={book}/>
                                ))}
                            </ol>
                        </div>}
                    </div>
                )}/>

                <Route exact path='/' render={() => (
                    <MyReads
                        books={this.state.books}
                        onUpdateBookShelf={(book, shelf) => {
                            this.updateBookShelf(book, shelf);
                        }}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
