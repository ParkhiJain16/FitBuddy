// import { useState } from "react";
// import LogWorkout from "./LogWorkout";
// import MyPlansList from "./MyPlansList";
// import Progress from "./Progress";

// const MyPlan = () => {
//   const [tab, setTab] = useState("plans");

//   return (
//     <div>
//       <h1>My Fitness</h1>

//       <button onClick={() => setTab("plans")}>My Plans</button>
//       <button onClick={() => setTab("log")}>Log Workout</button>
//       <button onClick={() => setTab("progress")}>Progress</button>

//       {tab === "plans" && <MyPlansList />}
//       {tab === "log" && <LogWorkout />}
//       {tab === "progress" && <Progress />}
//     </div>
//   );
// };

// export default MyPlan;
import { useState } from "react";
import MyPlansList from "./MyPlansList";

const MyPlan = () => {
  return (
    <div>
      <MyPlansList />
    </div>
  );
};

export default MyPlan;