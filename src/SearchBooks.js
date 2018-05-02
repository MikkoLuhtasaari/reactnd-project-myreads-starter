import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from "./Book";

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };
    state = {
        query : ''
    };
    render() {
        const {query} = this.state;
        const books = this.props;
        const showingBooks = query === ''
            ? books
            : books.filter((b) => (
                b.name.toLowerCase().includes(query.toLowerCase())
            ));
        return (
            <div>
            </div>
        )
    }
}

export default SearchBooks