import React from 'react'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useDebounce from '../Hooks/useDebounce'

function Home() {

	const [results, setResults] = useState([])
	const [searchTerm, setSearchTerm] = useState("")
	const [isSearching, setIsSearching] = useState(false)

	const debouncedSearchTerm = useDebounce(searchTerm, 500)
	useEffect(
		() => {
			if (debouncedSearchTerm) {
				setIsSearching(true)
				console.log(searchCharacters(debouncedSearchTerm))
				searchCharacters(debouncedSearchTerm).then(res => {
					console.log(res)
					setResults(res)
					setIsSearching(false)
				})
			} else {
				setResults([])
			}
		},

		[debouncedSearchTerm]
	)
	return (
		<div>
			<Link to="/search-results">Links to genres</Link>
			<SearchBar
				placeholder="Enter a search..."
				onChange={e => setSearchTerm(e.target.value)}
			/>
			{isSearching && <div>Searching...</div>}

			{results.map(result => {
				return (
					<div className='container'>
						<div className="podcast-row">
							<p key={result.id}>{result.title_original}</p>
							<Link to={`/podcasts/${result.id}`}>
								<img className='podcast-img' src={result.thumbnail} alt="" />
							</Link>
						</div>
					</div>
				)
			})}

		</div>
	)
}


function searchCharacters(searchTerm) {
	return fetch(
		`http://localhost:8000?searchTerm=${searchTerm}`,
		{
			method: 'GET'
		}
	)
		.then(response => response.json())
		.then(response => response.results)
		.catch(err => {
			console.log(err)
			return []
		})
}

export default Home

