import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Podcasts() {

    let fetchedPodcastId = useParams()
    // const [podcastId, setpodcastId] = useState(fetchedPodcastId)
    fetchedPodcastId = fetchedPodcastId.podcastId
    console.log(fetchedPodcastId)
    useEffect(
        () => {
            getPodcast(fetchedPodcastId).then(res => {
                console.log('show me something',res);
            })
        }, [fetchedPodcastId]
    )
    return(
        <div>
            <p>Shits displaying</p>
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
