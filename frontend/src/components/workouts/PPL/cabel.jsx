import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";
import React from 'react'

const cable = () => {
  return (
    <ExerciseDetail 
        {...ExerciseData.cablecrossover}
    />
  )
}

export default cable;
