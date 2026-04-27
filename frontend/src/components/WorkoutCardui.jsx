import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const WorkoutCardui = ({
  index,
  title,
  image,
  video,
  sets,
  path,
  mode = "view",
  exerciseData,
  onChange
}) => {

  const [weight, setWeight] = useState("");

  const handleWeightChange = (val) => {
    setWeight(val);

    if (onChange) {
      onChange({
        ...exerciseData,
        weight: Number(val)
      });
    }
  };

  return (
    <div className="card-links">

      {mode === "view" ? (
        <Link to={path}>
          <CardContent />
        </Link>
      ) : (
        <CardContent />
      )}

    </div>
  );

  function CardContent() {
    return (
      <div className="header-about">

        <h1>Workout {index + 1}</h1>

        <div className="workout-row">

          {/* 🔥 ONLY SHOW VIDEO IN VIEW MODE */}
          {mode === "view" && image && video && (
            <VideoPlayer thumbnail={image} video={video} />
          )}

          <div className="workout-text">

            <h3>{title}</h3>

            <ol>
              {sets.map((set, i) => (
                <li key={i}>{set}</li>
              ))}
            </ol>

            {/* 🔥 LOG MODE FEATURES */}
            {mode === "log" && (
              <>
                {/* LAST WEIGHT */}
                {exerciseData?.lastWeight ? (
                  <p className="last-weight">
                    Last: {exerciseData.lastWeight}kg
                  </p>
                ) : (
                  <p className="first-time">First time 🔥</p>
                )}

                {/* INPUT */}
                <input
                  type="number"
                  placeholder="Enter Weight"
                  value={weight}
                  onChange={(e) => handleWeightChange(e.target.value)}
                />

                {/* PROGRESS */}
                {exerciseData?.weight && exerciseData?.lastWeight && (
                  <p className="progress-text">
                    {exerciseData.weight > exerciseData.lastWeight
                      ? `+${exerciseData.weight - exerciseData.lastWeight}kg 🔥`
                      : "No progress"}
                  </p>
                )}

                {/* PR */}
                {exerciseData?.isPR && (
                  <p className="pr-badge">🎉 NEW PR!</p>
                )}
              </>
            )}

          </div>
        </div>
      </div>
    );
  }
};

export default WorkoutCardui;