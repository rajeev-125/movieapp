import React from 'react'

export default function Movielist(props) {
    return (
        <div>
            <div>
                <img src = {props.imgurl} alt="...." />
                <h3>{props.title}</h3>
                <h4>{props.year}</h4>
                <h4>{props.boxOffice}</h4>
                <h4>{props.ImdbRating}</h4>
            </div>
            
        </div>
    )
}
