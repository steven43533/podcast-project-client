import React from 'react'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

	const [podcastData, setPodcastData] = useState([])
	const [searchTerm, setSearchTerm] = useState("")

	const handleChange = event => {
		setSearchTerm(event.target.value)
		getPodcasts()
		console.log(searchTerm);
	}


	const url = `http://localhost:8000?searchTerm=${searchTerm}`

	// useEffect(() => {
	// 	getPodcasts()
	// }, [])

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
			<SearchBar 
			placeholder="Enter a search..." 
			value={searchTerm} 
			onChange={handleChange}
			/>
			{podcastData.map((value) => {
				return (
					<div className='container'>	
						<div className="podcast-row">
								<p key={value.id}>{value.title_original}</p>
								<img src={value.thumbnail} alt="podcast-thumbnail" />
						</div>
					</div>
				)


			})}

		</div>
	)
}

export default Home

