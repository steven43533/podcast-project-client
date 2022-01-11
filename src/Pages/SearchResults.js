import React from 'react'
import { useState, useEffect } from 'react'

function SearchResults() {
    const [genreData, setGenreData] = useState([])

    const url = "http://localhost:8000/by-genre"

    useEffect(() => {
        getByGenre()
    }, [])

    const getByGenre = () => {
        fetch(url)
            .then(response => response.json())
            .then((genreData) => {
                setGenreData(genreData.genres)
                console.log(genreData.genres);
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {genreData.map((value) => {
                return (
                    <div>
                        <p key={value.id}>{value.name}</p>
                    </div>
                )


            })}
        </div>
    )
}

export default SearchResults
