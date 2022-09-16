import React from 'react'

function Movieslist({ keyword, movies }) {
  if (keyword.length < 2 && !movies.length) return null;

  if (keyword.length > 1) {
    let startsWith = (str) =>{
      let regex = `^${keyword}`
      let final = new RegExp(regex,'i')
      return final.test(str)
    }

    movies = movies.filter((movie) => startsWith(movie.name) || startsWith(movie.ratings) || startsWith(movie.duration) )
  }

  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
      {movies.length ? movies.map((movie, index) => (
        <li 
        key={`ml+${index}`}
          className='slide-up-fade-in justify-content-between'
          style={{borderBottom: '2px solid var(--primary-color)'}}
        >
          <div>
            <h3 className='my-3'>{movie.name}</h3>
            <p className='my-0 text-right'>Ratings: {movie.ratings}/100</p>
          </div>
          <div>
            <p className='justify-content-end'>{movie.duration} Hrs</p>
          </div>
        </li>))
      : <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>}
      </ul>
    </section>
  )
}

export default Movieslist;
