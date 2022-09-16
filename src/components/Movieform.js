import React, { useState } from 'react'

function Movieform({ onAdd }) {
  const [name, setName] = useState('')
  const [ratings, setRatings] = useState(0)
  const [duration, setDuration] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !ratings || !duration) return;

    let regexp = new RegExp(`^([0-9]?)([.]?)([0-9]?[0-9])([hm])$`)

    if (!regexp.test(duration)) {
      setError(true)
    }

    regexp = new RegExp(`m$`)

    let calcDuration = duration 
    if (regexp.test(duration)) {
      calcDuration = duration.slice(0, -1);
      calcDuration = Math.round(calcDuration / 60 * 100) / 100;
    } else {
      return;
    }

    onAdd({
      name,
      ratings,
      duration: calcDuration,
    })
  }

  const handleChange = (cb) => (e) => {
    setError(false)
    cb(e.target.value)
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={handleSubmit}>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              value={name}
              onChange={handleChange(setName)}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              min={0}
              max={100}
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              value={ratings}
              onChange={handleChange(setRatings)}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              value={duration}
              onChange={handleChange(setDuration)}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {error && <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
