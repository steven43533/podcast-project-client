import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function SearchBar({ placeholder, data }) {
    return (
        <div className='search'>
            <FormControl component="fieldset">
                <FormLabel component="legend">Search By</FormLabel>
                <RadioGroup
                    aria-label="podcast"
                    defaultValue="podcast"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="podcast" control={<Radio />} label="Podcast" />
                    <FormControlLabel value="genre" control={<Radio />} label="Genre" />
                </RadioGroup>
            </FormControl>
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} />
                <div className='searchIcon'>
                    <SearchIcon />
                </div>
            </div>
            <div className="dataResult">

            </div>

        </div>
    )
}

export default SearchBar
