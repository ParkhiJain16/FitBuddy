import React from "react";
import VideoPlayer from "./VideoPlayer";
import BodyMap from "./BodyMap";


const ExerciseDetail = ({title,video,thumbnail,description,instructions,equipment,primaryMuscles,secondaryMuscles,bodymapPrimary,bodymapSecondary,mistakes}) => {
  return (
    <div className="bench-layout">
        <div className="left-video">
            <VideoPlayer
                thumbnail={thumbnail}
                video={video}
            />
        </div>
        <div className="right-content">
            <div className="header">
                <h1>How to do a {title}</h1>
            </div>
            <div className="header-about">
                <h2>Instructions for proper Form</h2>
                <p>{description}</p>
                <ol>
                    {instructions.map((step,i)=>(
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className="equipment">
                <h2>Eqipment Required</h2>
                <div className="equipment-items">
                    {equipment.map((item,i)=>(
                        <div className="equip" key = {i}>
                            <img src = {item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="target">
                <h2>Targeted Muscles</h2>
                <div className="muscle-section">
                    <div className="body-map">
                        <BodyMap 
                            primary={bodymapPrimary} 
                            secondary={bodymapSecondary}
                        /> 
                    </div>
                    <div className="muscle-info">
                        <div className="primary">
                            <span className="dot-red"></span>
                            <h3>Primary Muscles</h3>
                            <p>{primaryMuscles.join(', ')}</p>
                        </div>
                        <div className="secondary">
                            <span className="dot-green"></span>
                            <h3>Secondary Muscles</h3>
                            <p>{secondaryMuscles.join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-mistakes">
                <h2>Common Form Mistakes</h2>
                <div className="mistakes">
                    {mistakes.map((mistake,i)=>(
                        <div key = {i}>
                            <h3>{mistake.title}</h3>
                            <p>{mistake.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ExerciseDetail
