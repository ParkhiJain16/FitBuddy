import React from "react";
import ExerciseDetail from "../../ExerciseDetail";
import { ExerciseData } from "../../ExerciseData";

const overHeadPress = () => {
  return (
    <ExerciseDetail
      {...ExerciseData.overHeadPress}
    />
  )
}

export default overHeadPress
