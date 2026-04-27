import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";
import React from 'react'

const BarbelRow = () => {
  return (
    <ExerciseDetail 
        {...ExerciseData.barbelRow}
    />
  )
}

export default BarbelRow;
