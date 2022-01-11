import React from 'react'
import SearchBar from '../components/SearchBar'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

	const [podcastData, setPodcastData] = useState([])

	const url = "http://localhost:8000/by-podcast"

	useEffect(() => {
		getPodcasts()
	}, [])

	const getPodcasts = () => {
		fetch(url)
			.then(response => response.json())
			.then((podcastData) => {
				setPodcastData(podcastData.results)
				console.log(podcastData.results);
			})
			.catch(err => console.log(err))
	}

	return (
		<div>
			<Link to="/search-results">Search Results Page</Link>
			<SearchBar placeholder="Enter a search..."/>
			{podcastData.map((value) => {
				return (
					<div>
						<p key={value.id}>{value.title_original}</p>
						<img src={value.thumbnail} alt="podcast-thumbnail" />
						<p>{value.total_episodes}</p>
						<p>{value.website}</p>
					</div>
				)
					
				
			})}
			
		</div>
	)
}

export default Home

