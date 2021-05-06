import React from 'react'

function averageRating (props) {
    return(
        <div>
            <h3>Average Rating</h3>
            <h2>{props.rating}</h2>
        </div>
    )
}

export default averageRating