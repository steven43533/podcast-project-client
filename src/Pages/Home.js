import React from 'react'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useDebounce from '../Hooks/useDebounce'

function Home() {

	const [results, setResults] = useState([])
	const [searchTerm, setSearchTerm] = useState("")
	const [isSearching, setIsSearching] = useState(false)

	const debouncedSearchTerm = useDebounce(searchTerm, 400)
	useEffect(
		() => {
			if (debouncedSearchTerm) {
				setIsSearching(true)
				searchCharacters(debouncedSearchTerm).then(results => {
					setIsSearching(false)
					setResults(results)
				})
			} else {
				setResults([])
			}
		},

		[debouncedSearchTerm]
	)

	return (
		<div>
			<Link to="/search-results">Search Results Page</Link>
			<SearchBar
				placeholder="Enter a search..."
				onChange={e => setSearchTerm(e.target.value)}
			/>
			{isSearching && <div>Searching...</div>}
			{results.map((value) => {
				<div className='container'>
					<div className="podcast-row">
						<p key={value.id}>{value.title_original}</p>
						<img src={value.thumbnail} alt="podcast-thumbnail" />
					</div>
				</div>


			})}

		</div>
	)
}


function searchCharacters(searchTerm) {
	return fetch(`http://localhost:8000?searchTerm=${searchTerm}`,
		{
			method: 'GET'
		}
	)
		.then(response => response.json())
		.then(response => console.log('search responses log:',response.results))
		.catch(err => console.log(err))
}

export default Home

