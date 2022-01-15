import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import parse from 'html-react-parser'
function Podcasts() {

    let fetchedPodcastId = useParams()
    const [podcastData, setPodcastData] = useState([])
    const [episodeData, setEpisodeData] = useState([])
    fetchedPodcastId = fetchedPodcastId.podcastId

    useEffect(
        () => {
            getPodcast(fetchedPodcastId).then(res => {
                setPodcastData(res)
                setEpisodeData(res.episodes)
            })
        }, [fetchedPodcastId]
    )

    return (
        <div>
            <img className="podcast-img" src={podcastData.image} alt="" />
            <h2>{podcastData.title}</h2>
            <h4>{podcastData.description}</h4>
            <span>Episode Count: {podcastData.total_episodes}</span>
            <br />
            <span>Podcast is in: {podcastData.language}</span>
            <p>{podcastData.website}</p>
            <h1>Recent Episodes:</h1>
            {episodeData.map((value, index) => {
                const msToDate = new Date(value.pub_date_ms)
                const descripToBeParsed = value.description
                return(
                    <div>
                        <img className="podcast-img" src={value.thumbnail} alt="" />
                        <h4 key={index.id}>{value.title}</h4>
                        <p>{msToDate.toDateString()}</p>
                        <small>{parse(descripToBeParsed)}</small>
                    </div>
                )
                
            })}
            
        </div>
    )
}

function getPodcast(idOfPodcast) {
    return fetch(
        `http://localhost:8000/podcasts/${idOfPodcast}`,
        {
            method: 'GET'
        }
    )
        .then(response => response.json())
        .catch(err => {
            console.log(err)
            return []
        })
}

export default Podcasts
