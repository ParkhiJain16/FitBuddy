import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";


const WorkoutCard = ({index,title,image,video,sets,path}) => {
  return (
    <Link to = {path} className="card-links">
        <div className="header-about">
            <h1>Workout {index+1}</h1>
            <div className="workout-row">
                <VideoPlayer
                    thumbnail={image}
                    video = {video}
                />
                <div className="workout-text">
                    <h3>{title}</h3>
                    <ol>
                        {sets.map((set,i)=>(
                            <li key={i}>{set}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default WorkoutCard;