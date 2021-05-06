import React from 'react'

function sentimentAnalysis (props) {
    return (
        <div>
            <h3>Sentiment Analysis</h3>
            <h2>{props.Sentiment}</h2>
            <h2>{props.Sentiment2}</h2>
            <h2>{props.Sentiment3}</h2>
        </div>
    )
}

export default sentimentAnalysis