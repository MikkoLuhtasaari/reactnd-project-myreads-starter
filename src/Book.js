import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        coverUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    };
    handleShelfChange = (e) => {
        console.log(e.target.value);
        /*this.setState((e) => ({
            status : e.target.value
        }))*/
    };

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.coverUrl}}/>
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
                <div className="book-title">{this.title}</div>
                <div className="book-authors">{this.author}</div>
            </div>
        )
    }
}

export default Book;