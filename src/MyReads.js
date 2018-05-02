import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import {Link} from 'react-router-dom'

const currentlyReading = "currentlyReading";
const wantToRead = "wantToRead";
const read = "read";

class MyReads extends Component {
    static propTypes = {
        books: PropTypes.object.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    };
    state = {
        query: ''
    };

    render() {
        const onUpdateBookShelf = this.props;
        const {books} = this.props;
        {//TODO Figure out why books is usually undefined but works with showingBooks
        }
        const {query} = this.state;
        const showingContacts = query === ''
            ? books
            : books.filter((b) => (
                b.name.toLowerCase().includes(query.toLowerCase())));
        console.log("showingBooks " + showingContacts);

        return (
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
                                    {showingContacts.filter((b) => (
                                        b.shelf.toLowerCase() === (currentlyReading.toLowerCase())
                                    )).map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onUpdateBookShelf={(book, shelf) => {
                                                    onUpdateBookShelf(book, shelf);
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {showingContacts.filter((b) => (
                                        b.shelf.toLowerCase() === (wantToRead.toLowerCase())
                                    )).map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onUpdateBookShelf={(book, shelf) => {
                                                    onUpdateBookShelf(book, shelf);
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {showingContacts.filter((b) => (
                                        b.shelf.toLowerCase() === (read.toLowerCase())
                                    )).map((book) => (
                                        <li key={book.id}>
                                            <Book
                                                book={book}
                                                onUpdateBookShelf={(book, shelf) => {
                                                    onUpdateBookShelf(book, shelf);
                                                }}
                                            />
                                        </li>
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
        )
    }
}

export default MyReads;