// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => <div className="review-list">{props.reviews.map((review, id) => <Review key={id} review={review}/>)}</div>

const Review = (props) => <div className="review"><h1><a href={props.review.link.url}>{props.review.display_title}</a></h1><h2>{props.review.mpaa_rating}</h2><img src={props.review.multimedia.src} alt={props.review.display_title}></img></div>

export default MovieReviews

MovieReviews.defaultProps = {reviews: []}