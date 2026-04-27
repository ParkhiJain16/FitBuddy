import { useState } from 'react';
import React from 'react'
import {Link} from 'react-router-dom';
const Female = () => {
    const [level, setLevel] = useState("");
  return (
    <>
        <div className='fitness'>
            <div className='header'>
                <h1>Best Workouts For Womens</h1>
                <h2>This workout is designed to effectively promote muscle growth and general fitness progression.</h2>
            </div>
        <div className='fitness-detail'>
            <h2>Tell Us about your Fitness Experience</h2>

            <div className='links'>
              
            <div className='card-x' onClick={() => setLevel("beginner")}>
              <img src="https://images.pexels.com/photos/7991952/pexels-photo-7991952.jpeg?_gl=1*aim7k9*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MDExJGo2MCRsMCRoMA.."></img>
                <h3>Beginner</h3>
            </div>
            <div className='card-x' onClick={() => setLevel("intermediate")}>
              <img src = "https://images.pexels.com/photos/7991952/pexels-photo-7991952.jpeg?_gl=1*aim7k9*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MDExJGo2MCRsMCRoMA.."></img>
                <h3>Intermediate</h3>
            </div>
            <div className='card-x' onClick={() => setLevel("advance")}>
              <img src ="https://images.pexels.com/photos/7991952/pexels-photo-7991952.jpeg?_gl=1*aim7k9*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MDExJGo2MCRsMCRoMA.."></img>
                <h3>Advance</h3>
            </div>
            </div>
          </div>
          <div className="plans">

        {level === "beginner" && (
          <div className="workout-plans">
            <h2>Beginner Plan</h2>
            <Link to="/PPLFemale" className='card-links'>
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?_gl=1*ws0it*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MTYzJGo2MCRsMCRoMA.."></img>
                <div className='card-info'>
                  <h2>Push, Pull, Legs</h2>
                  <p>Chest • Back • Legs</p>
                  <p>Level: Beginner</p>
                  <p>Duration: 60 mins</p>
                </div>
            </div>  
            </Link>
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/31028213/pexels-photo-31028213.jpeg?_gl=1*1p8iw92*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTYyMjYkbzI4JGcxJHQxNzc1ODE2Mjk2JGo1NyRsMCRoMA.."></img>
                <div className='card-info'>
                  <h2>Fat Loss Workout</h2>
                  <p>Full Body • Cardio Focus</p>
                  <p>Level: Beginner–Intermediate</p>
                  <p>Duration: 30–45 mins</p>
                </div>
            </div>  
            {/* <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/16695681/pexels-photo-16695681.jpeg?_gl=1*11u17hl*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcwNDckajQ1JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Light Resistance Training</h2>
                  <p>Full Body • Low Weights</p>
                  <p>Level: Beginner</p>
                  <p>Duration: 25–40 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/209983/pexels-photo-209983.jpeg?_gl=1*1ww4vn2*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTY5NjIkajU5JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Core Strength Workout</h2>
                  <p>Abs • Lower Back • Stability</p>
                  <p>Level: All Levels</p>
                  <p>Duration: 20–30 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/8436159/pexels-photo-8436159.jpeg?_gl=1*17pge6m*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTg2MzQkajIzJGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Full Body Workout</h2>
                  <p>Upper + Lower Body</p>
                  <p>Level: Beginner–Intermediate</p>
                  <p>Duration: 40–60 mins</p>
                </div>
            </div>   */}
            {/* <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/9602276/pexels-photo-9602276.jpeg?_gl=1*gt6v1p*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcyMDQkajQ2JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Powerlifting Routine</h2>                                                                             
                  <p>Squat • Bench • Deadlift</p>
                  <p>Level: Advanced</p>
                  <p>Duration: 60–90 mins</p>
                </div>
            </div>   */}
            
          </div>
        )}

        {level === "intermediate" && (
          <div className="workout-plans">
            <h2>Intermediate Plan</h2>
            <Link to="/PPLFemaleInter" className='card-links'>
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?_gl=1*ws0it*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MTYzJGo2MCRsMCRoMA.."></img>
                <div className='card-info'>
                  <h2>Push, Pull, Legs</h2>
                  <p>Chest • Back • Legs</p>
                  <p>Level: Intermediate</p>
                  <p>Duration: 60 mins</p>
                </div>
            </div>  
            </Link>
            <Link to="/fatloss" className='card-links'>
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/31028213/pexels-photo-31028213.jpeg?_gl=1*1p8iw92*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTYyMjYkbzI4JGcxJHQxNzc1ODE2Mjk2JGo1NyRsMCRoMA.."></img>
                <div className='card-info'>
                  <h2>Fat Loss Workout</h2>
                  <p>Full Body • Cardio Focus</p>
                  <p>Level: Beginner–Intermediate</p>
                  <p>Duration: 30–45 mins</p>
                </div>
            </div> 
            </Link> 
            {/* <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/16695681/pexels-photo-16695681.jpeg?_gl=1*11u17hl*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcwNDckajQ1JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Light Resistance Training</h2>
                  <p>Full Body • Low Weights</p>
                  <p>Level: Intermediate</p>
                  <p>Duration: 25–40 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/209983/pexels-photo-209983.jpeg?_gl=1*1ww4vn2*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTY5NjIkajU5JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Core Strength Workout</h2>
                  <p>Abs • Lower Back • Stability</p>
                  <p>Level: All Levels</p>
                  <p>Duration: 20–30 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/8436159/pexels-photo-8436159.jpeg?_gl=1*17pge6m*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTg2MzQkajIzJGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Full Body Workout</h2>
                  <p>Upper + Lower Body</p>
                  <p>Level: Beginner–Intermediate</p>
                  <p>Duration: 40–60 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/9602276/pexels-photo-9602276.jpeg?_gl=1*gt6v1p*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcyMDQkajQ2JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Powerlifting Routine</h2>
                  <p>Squat • Bench • Deadlift</p>
                  <p>Level: Intermediate</p>
                  <p>Duration: 60–90 mins</p>
                </div>
            </div>   */}
            
          </div>
        )}

        {level === "advance" && (
          <div className="workout-plans">
            <h2>Advanced Plan</h2>
            <Link to="/PPLFemaleAd" className='card-links'>
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?_gl=1*ws0it*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MTYzJGo2MCRsMCRoMA.."></img>
                <div className='card-info'>
                  <h2>Push, Pull, Legs</h2>
                  <p>Chest • Back • Legs</p>
                  <p>Level: Advance</p>
                  <p>Duration: 60 mins</p>
                </div>
            </div> 
            </Link> 
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/31028213/pexels-photo-31028213.jpeg?_gl=1*1p8iw92*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTYyMjYkbzI4JGcxJHQxNzc1ODE2Mjk2JGo1NyRsMCRoMA.."></img>
                <div className='card-info'>
                  <h2>Fat Loss Workout</h2>
                  <p>Full Body • Cardio Focus</p>
                  <p>Level: Beginner–Intermediate</p>
                  <p>Duration: 30–45 mins</p>
                </div>
            </div>  
            {/* <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/16695681/pexels-photo-16695681.jpeg?_gl=1*11u17hl*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcwNDckajQ1JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Light Resistance Training</h2>
                  <p>Full Body • Low Weights</p>
                  <p>Level: Advance</p>
                  <p>Duration: 25–40 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/209983/pexels-photo-209983.jpeg?_gl=1*1ww4vn2*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTY5NjIkajU5JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Core Strength Workout</h2>
                  <p>Abs • Lower Back • Stability</p>
                  <p>Level: All Levels</p>
                  <p>Duration: 20–30 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/8436159/pexels-photo-8436159.jpeg?_gl=1*17pge6m*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTg2MzQkajIzJGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Full Body Workout</h2>
                  <p>Upper + Lower Body</p>
                  <p>Level: Advanced</p>
                  <p>Duration: 40–60 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/9602276/pexels-photo-9602276.jpeg?_gl=1*gt6v1p*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcyMDQkajQ2JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Powerlifting Routine</h2>
                  <p>Squat • Bench • Deadlift</p>
                  <p>Level: Advanced</p>
                  <p>Duration: 60–90 mins</p>
                </div>
            </div>   */}
            
          </div>
        )}

      </div>
        </div>
    </>
  )
}

export default Female;
