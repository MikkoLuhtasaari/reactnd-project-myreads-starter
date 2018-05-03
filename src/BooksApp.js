import React from 'react'
import * as BooksAPI from './BooksAPI'
import './BooksApp.css'
import Book from "./Book";
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
import MyReads from './MyReads'

class BooksApp extends React.Component {
    state = {
        books: [],
        searchBooks: []
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
        if(query && query.length > 0) {
            BooksAPI.search(query).then((searchBooks) => {
                this.setState(() => ({
                    searchBooks
                }))
            })} else {
            this.setState(() => ({
                searchBooks: []
            }))
        }
    };

    clearSearchResults = () => {
        this.setState(() => ({
            searchBooks: []
        }))
    };

    render() {
        return (
            <div className="app">

                <Route path='/search' render={() => (
                    <div>
                        <SearchBooks
                            clearSearchResults={() => {
                                this.clearSearchResults()
                            }}
                            onUpdateQuery={(query) => {
                                this.searchBooks(query)
                            }}
                        />
                        {this.state.searchBooks && this.state.searchBooks.length > 0 &&
                        <div className="search-books-results">
                            <ol className="books-grid">
                                {this.state.searchBooks.map((book) => (
                                    <Book
                                        key={book.id} book={book}
                                        onUpdateBookShelf={(searchBooks, shelf) => {
                                            this.updateBookShelf(searchBooks, shelf);
                                        }}
                                    />
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
