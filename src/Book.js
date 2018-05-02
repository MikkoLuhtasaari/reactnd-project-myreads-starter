import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    };
    handleShelfChange = (e) => {
        console.log(e.target.value);
    };

    render() {
        const book = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.book.imageLinks.thumbnail})`}}/>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleShelfChange} value={this.value}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.book.title}</div>
                <div className="book-authors">{book.book.author}</div>
            </div>
        )
    }
}

export default Book;