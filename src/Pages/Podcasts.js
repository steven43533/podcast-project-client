import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Podcasts() {

    let fetchedPodcastId = useParams()
    const [podcastData, setPodcastData] = useState([])
    const [episodeData, setEpisodeData] = useState([])
    fetchedPodcastId = fetchedPodcastId.podcastId
    console.log(fetchedPodcastId)
    useEffect(
        () => {
            getPodcast(fetchedPodcastId).then(res => {
                setPodcastData(res)
                setEpisodeData(res.episodes)
            })
        }, [fetchedPodcastId]
    )
    console.log(podcastData)
    return (
        <div>
            <img className="podcast-img" src={podcastData.image} alt="" />
            <h2>{podcastData.title}</h2>
            <h4>{podcastData.description}</h4>
            <span>{podcastData.total_episodes}</span>
            <span>{podcastData.language}</span>
            <p>{podcastData.website}</p>
            {episodeData.map((value, index) => {
                const msToDate = new Date(value.pub_date_ms)
                return(
                    <div>
                        <h4 key={index.id}>{value.title}</h4>
                        <p>{msToDate.toDateString()}</p>
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
