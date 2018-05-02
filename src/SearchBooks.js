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
        return (
            <div>
                {console.log(this.state.books)}
            </div>
        )
    }
}

export default SearchBooks