import React from 'react'
import './Search.css'

const Search = ({onSearch, search}) => {
    return (
        <div className='search-container'>
            <input 
                type="text" 
                value={search}
                className='search' 
                placeholder='Type to filter...' 
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}



export default Search
