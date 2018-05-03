import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
    static propTypes = {
        onUpdateQuery: PropTypes.func.isRequired
    };

    updateQuery = (e) => {
        if(this.props.onUpdateQuery) {
            this.props.onUpdateQuery(e.target.value);
        }
    };

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/'>Close</Link>
                        <div className="search-books-input-wrapper">
                            <input onChange={this.updateQuery} value={this.value} type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks