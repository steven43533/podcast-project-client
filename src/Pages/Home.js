import { useState } from "react"

const Home = (props) => {

	const [selectedOption, setSelectedOption] = useState("Search-By-Podcast")

	const [searchTerm, setSearchTerm] = useState("")

	let handleOptionChange = changeEvent => {
		setSelectedOption(changeEvent.target.value)
	}

	let handleSearchChange = changeEvent => {
		setSearchTerm(changeEvent.target.value)
	}
	
	console.log(searchTerm);
	let handleFormSubmit = formSubmitEvent => {
		formSubmitEvent.preventDefault()
		console.log("You searched by ", selectedOption);
	}

	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-sm-12">

					<form onSubmit={handleFormSubmit}>

						<div className="form-check">
							<label>
								<input
									type="radio"
									value="Search-By-Podcast"
									checked={selectedOption === "Search-By-Podcast"}
									onChange={handleOptionChange}
									className="form-check-input"
								/>
								Search By Podcast
							</label>
						</div>

						<div className="form-check">
							<label>
								<input
									type="radio"
									value="Search-By-Genre"
									checked={selectedOption === "Search-By-Genre"}
									onChange={handleOptionChange}
									className="form-check-input"
								/>
								Search by Genre
							</label>
						</div>

						<label>
							<input 
							type="text"
							value={searchTerm}
							onChange={handleSearchChange}
							/>
						</label>

						<div className="form-group">
							<button className="btn btn-primary mt-2" type="submit">
								Search
							</button>
						</div>

					</form>

				</div>
			</div>
		</div>
	)
}

export default Home
