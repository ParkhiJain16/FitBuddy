import React from 'react'
import {Link} from "react-router-dom"
const Workout = () => {
  return (
    <>
      <div className='workout-page'>
        <div className='header'>
           <h1>Generate your Workout Plan</h1>
           <h3>Select a workout focus to start: </h3>
         </div>
         <div className='gender-detail'>
            <h2>Select Your Gender</h2>

            <div className='gender-container'>
              
              <Link to="/male" className='gender-card'>
                <img src="https://images.pexels.com/photos/29526378/pexels-photo-29526378.jpeg" />
                <h3>Male</h3>
              </Link>

              <Link to="/women" className='gender-card'>
                <img src="https://images.pexels.com/photos/7991613/pexels-photo-7991613.jpeg?_gl=1*1hkuxi2*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ4OTgzNjEkbzUkZzEkdDE3NzQ4OTkyNjMkajU5JGwwJGgw" />
                <h3>Female</h3>
              </Link>

            </div>
          </div>
        </div>
    </>
  )
}

export default Workout
