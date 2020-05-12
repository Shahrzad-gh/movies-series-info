import React, { Component } from 'react'
import {searchMovie, fetchMovies, setLoading} from '../../actions/SearchActions';
import {connect} from 'react-redux';

class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
            <div className="m-5">
                <div className="col-md-10 offset-md-1 mt-5 border border-secondary rounded-lg p-3 bg-light">
                    <div className="text-center font-weight-bold pb-3">Search for a movie, TV series and ...</div>
                    <form className="input-group mb-3" onSubmit={this.onSubmit}>
                        <input type="text" className="form-control" placeholder="Search ......" aria-label="Recipient's username"
                        onChange= {this.onChange}/>
                        <div className="input-group-append">
                            <button className="input-group-text" type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm);