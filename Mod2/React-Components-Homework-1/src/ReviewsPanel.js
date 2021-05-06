import React from 'react'

function reviewsPanel(props) {
    return(
        <div>
            <h3>Reviews</h3>
            <h2>{props.reviews}</h2>
        </div>
    )
}

export default reviewsPanel