import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import {Link} from 'react-router-dom'

class MyReads extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBookShelf: PropTypes.func.isRequired
    };

    render() {
        const shelves = {
            currentlyReading: ['Currently Reading', 'currentlyReading'],
            wantToRead: ['Want to Read', 'wantToRead'],
            read: ['Read', 'read']
        };
        const {onUpdateBookShelf, books} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {Object.keys(shelves).map((shelf) =>
                        <div className="bookshelf" key={shelf}>
                            <h2 className="bookshelf-title">{shelves[shelf][0]}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books.filter((b) => (
                                        b.shelf.toLowerCase() === (shelves[shelf][1].toLowerCase())
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
                    )}
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