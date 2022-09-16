import React, { useState } from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {
  const [movies, setMovies] = useState([]);

  const [keyword, setKeyword] = useState('')

  const handleSave = (movie) => {
    let newMovies = [...movies, movie];
    newMovies.sort((a, b) => parseFloat(b.duration) - parseInt(a.duration))
    setMovies(newMovies);
  }

  const handleSearch = (val) => setKeyword(val)

  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform onAdd={handleSave}/>
        </div>
        <div className='layout-column w-30'>
          <Search keyword={keyword} onSearch={handleSearch} />
          <Movieslist keyword={keyword} movies={movies} />
        </div>
      </div> 
    </div>
  )
}

export default App;
