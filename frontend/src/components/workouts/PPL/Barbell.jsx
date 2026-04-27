import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";

const Barbell = () => {
  return (
    <ExerciseDetail
      {...ExerciseData.barbell}
    />
  )
}

export default Barbell
