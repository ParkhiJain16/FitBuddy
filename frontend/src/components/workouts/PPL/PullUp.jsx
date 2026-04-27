import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";
import React from 'react'

const PullUp = () => {
  return (
    <ExerciseDetail 
        {...ExerciseData.pullUps}
    />
  )
}

export default PullUp
