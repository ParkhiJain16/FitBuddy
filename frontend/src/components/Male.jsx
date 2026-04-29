import { useState } from 'react';
import React from 'react'
import {Link} from 'react-router-dom';
const Male = () => {
    const [level, setLevel] = useState("");
  return (
    <>
        <div className='fitness'>
            <div className='header'>
                <h1>Best Workouts For Mens</h1>
                <h2>This workout is designed to effectively promote muscle growth and general fitness progression.</h2>
            </div>
        <div className='fitness-detail'>
            <h2>Tell Us about your Fitness Experience</h2>

            <div className='links'>
              
            <div className='card-x' onClick={() => setLevel("beginner")}>
              <img src="https://images.pexels.com/photos/13088864/pexels-photo-13088864.jpeg?_gl=1*1nwols6*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MDU5JGoxMiRsMCRoMA.."></img>
                <h3>Beginner</h3>
            </div>
            <div className='card-x' onClick={() => setLevel("intermediate")}>
              <img src = "https://images.pexels.com/photos/13088864/pexels-photo-13088864.jpeg?_gl=1*1nwols6*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MDU5JGoxMiRsMCRoMA.."></img>
                <h3>Intermediate</h3>
            </div>
            <div className='card-x' onClick={() => setLevel("advance")}>
              <img src ="https://images.pexels.com/photos/13088864/pexels-photo-13088864.jpeg?_gl=1*1nwols6*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzU4MTM5NDQkbzI3JGcxJHQxNzc1ODE0MDU5JGoxMiRsMCRoMA.."></img>
                <h3>Advance</h3>
            </div>
            </div>
          </div>
          <div className="plans">

        {level === "beginner" && (
          <div className="workout-plans">
            <h2>Beginner Plan</h2>
            <Link to="/PushPullLegs" className='card-links'>
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/10021282/pexels-photo-10021282.jpeg?_gl=1*1fvm17e*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTM3MjAkbzckZzEkdDE3NzQ5NTQ2MTEkajU5JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Push, Pull, Legs</h2>
                  <p>Chest • Back • Legs</p>
                  <p>Level: Beginner</p>
                  <p>Duration: 60 mins</p>
                </div>
            </div>  
            </Link>
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/16779443/pexels-photo-16779443.jpeg?_gl=1*1l7i7du*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcxMDQkajU5JGwwJGgw"></img>
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
            {/* <div className="card">Push</div>
            <div className="card">Pull</div>
            <div className="card">Chest</div>
            <div className="card">Hamstring</div>
            <div className='card'>Legs</div>
            <div className='card'>Back</div>
            <div className="card">Biceps</div>
            <div className='card'>Glutes</div> */}
            <Link to="/PushPullLegs" className='card-links'>
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/10021282/pexels-photo-10021282.jpeg?_gl=1*1fvm17e*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTM3MjAkbzckZzEkdDE3NzQ5NTQ2MTEkajU5JGwwJGgw"></img>
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
                <img src = "https://images.pexels.com/photos/16779443/pexels-photo-16779443.jpeg?_gl=1*1l7i7du*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcxMDQkajU5JGwwJGgw"></img>
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
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/10021282/pexels-photo-10021282.jpeg?_gl=1*1fvm17e*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTM3MjAkbzckZzEkdDE3NzQ5NTQ2MTEkajU5JGwwJGgw"></img>
                <div className='card-info'>
                  <h2>Push, Pull, Legs</h2>
                  <p>Chest • Back • Legs</p>
                  <p>Level: Advance</p>
                  <p>Duration: 60 mins</p>
                </div>
            </div>  
            <div className = "workout-card">
                <img src = "https://images.pexels.com/photos/16779443/pexels-photo-16779443.jpeg?_gl=1*1l7i7du*_ga*MTQ1MjYwNDA0Ni4xNzc0NzExNDQ0*_ga_8JE65Q40S6*czE3NzQ5NTY4OTUkbzgkZzEkdDE3NzQ5NTcxMDQkajU5JGwwJGgw"></img>
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
            </div>   */}
            {/* <div className = "workout-card">
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

      </div>
        </div>
    </>
  )
}

export default Male;
