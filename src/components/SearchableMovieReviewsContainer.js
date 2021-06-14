import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'RomRYEqFO1tWeCOvP0CaXKi7VwpllzQc';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${"horror"}`
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super()
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL)
        .then(resp => resp.json())
        .then(json => this.setState({
            reviews: json.results
        }))
    }

    render() {
        return <div><MovieReviews className="searchable-movie-reviews" />
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} name="searchTerm"></input>
                <input type="submit"></input>
            </form>
        </div>
    }
}