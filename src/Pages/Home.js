import { useState } from "react"

const Home = (props) => {

	const [selectedOption, setSelectedOption] = useState("Search-By-Podcast")

	let handleOptionChange = changeEvent => {
		setSelectedOption(changeEvent.target.value)
	}
	
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
