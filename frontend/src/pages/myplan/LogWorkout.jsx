// import { useEffect, useState } from "react";
// import axios from "axios";
// import WorkoutCard from "../../components/WorkoutCard";

// const LogWorkout = () => {
//   const [plan, setPlan] = useState(null);
//   const [logs, setLogs] = useState([]);
//   const [logData, setLogData] = useState([]);

//   // 🔥 FETCH PLAN + LOGS
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const [planRes, logsRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/plans", {
//             headers: { Authorization: `Bearer ${token}` }
//           }),
//           axios.get("http://localhost:5000/api/logs", {
//             headers: { Authorization: `Bearer ${token}` }
//           })
//         ]);

//         const userPlan = planRes.data[0];
//         const userLogs = logsRes.data;

//         setPlan(userPlan);
//         setLogs(userLogs);

//         // 🔥 attach lastWeight
//         const updatedDays = userPlan.days.map(day => ({
//           ...day,
//           exercises: day.exercises.map(ex => ({
//             ...ex,
//             lastWeight: getLastWeight(ex.name, userLogs)
//           }))
//         }));

//         setLogData(updatedDays);

//       } catch (err) {
//         console.error("Error loading data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🔥 GET LAST WEIGHT FUNCTION
//   const getLastWeight = (exerciseName, logsData) => {
//     for (let i = logsData.length - 1; i >= 0; i--) {
//       const log = logsData[i];

//       for (let ex of log.exercises) {
//         if (ex.name === exerciseName) {
//           return ex.weight;
//         }
//       }
//     }
//     return null;
//   };

//   // 🔥 HANDLE INPUT CHANGE FROM CARD
//   const handleExerciseChange = (dayIndex, exIndex, updatedExercise) => {
//     const updated = [...logData];
//     updated[dayIndex].exercises[exIndex] = updatedExercise;
//     setLogData(updated);
//   };

//   // 🔥 SAVE LOG
//   const saveLog = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const exercises = logData.flatMap(day => day.exercises);

//       const res = await axios.post(
//         "http://localhost:5000/api/logs",
//         { exercises },
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       );

//       alert("Workout Saved!");

//       // 🔥 update UI with PR response
//       const updatedExercises = res.data.exercises;

//       // re-map into days
//       let idx = 0;
//       const newLogData = logData.map(day => ({
//         ...day,
//         exercises: day.exercises.map(() => updatedExercises[idx++])
//       }));

//       setLogData(newLogData);

//     } catch (err) {
//       console.error("Error saving log:", err);
//     }
//   };

//   if (!logData.length) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>Log Workout</h2>

//       {logData.map((day, dayIndex) => (
//         <div key={dayIndex}>
//           <h3>{day.day}</h3>

//           {day.exercises.map((ex, exIndex) => (
//             <WorkoutCard
//               key={exIndex}
//               index={exIndex}
//               title={ex.name}
//               sets={[`${ex.sets} x ${ex.reps}`]}
//               image={ex.image}
//               video={ex.video}

//               // 🔥 IMPORTANT
//               mode="log"
//               exerciseData={ex}

//               onChange={(updatedEx) =>
//                 handleExerciseChange(dayIndex, exIndex, updatedEx)
//               }
//             />
//           ))}
//         </div>
//       ))}

//       <button onClick={saveLog}>Save Workout</button>
//     </div>
//   );
// };

// export default LogWorkout;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import WorkoutCard from "../../components/WorkoutCard";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid
// } from "recharts";

// const LogWorkout = () => {
//   const [plan, setPlan] = useState(null);
//   const [logs, setLogs] = useState([]);
//   const [logData, setLogData] = useState([]);

//   // 🔥 FETCH PLAN + LOGS
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const [planRes, logsRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/plans", {
//             headers: { Authorization: `Bearer ${token}` }
//           }),
//           axios.get("http://localhost:5000/api/logs", {
//             headers: { Authorization: `Bearer ${token}` }
//           })
//         ]);

//         const userPlan = planRes.data[0];
//         const userLogs = logsRes.data;

//         setPlan(userPlan);
//         setLogs(userLogs);

//         // 🔥 attach lastWeight
//         const updatedDays = userPlan.days.map(day => ({
//           ...day,
//           exercises: day.exercises.map(ex => ({
//             ...ex,
//             lastWeight: getLastWeight(ex.name, userLogs),
//             weight: ""
//           }))
//         }));

//         setLogData(updatedDays);

//       } catch (err) {
//         console.error("Error loading data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🔥 GET LAST WEIGHT
//   const getLastWeight = (exerciseName, logsData) => {
//     for (let i = logsData.length - 1; i >= 0; i--) {
//       const log = logsData[i];

//       for (let ex of log.exercises) {
//         if (ex.name === exerciseName) {
//           return ex.weight;
//         }
//       }
//     }
//     return null;
//   };

//   // 🔥 GRAPH DATA PREP
//   const getExerciseProgress = (exerciseName) => {
//     const data = [];

//     logs.forEach(log => {
//       const found = log.exercises.find(
//         ex => ex.name === exerciseName
//       );

//       if (found) {
//         data.push({
//           date: new Date(log.date).toLocaleDateString(),
//           weight: found.weight
//         });
//       }
//     });

//     return data;
//   };

//   // 🔥 HANDLE INPUT
//   const handleExerciseChange = (dayIndex, exIndex, updatedExercise) => {
//     const updated = [...logData];
//     updated[dayIndex].exercises[exIndex] = updatedExercise;
//     setLogData(updated);
//   };

//   // 🔥 SAVE LOG
//   const saveLog = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const exercises = logData.flatMap(day => day.exercises);

//       const res = await axios.post(
//         "http://localhost:5000/api/logs",
//         { exercises },
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       );

//       alert("Workout Saved!");

//       // 🔥 update PR UI
//       const updatedExercises = res.data.exercises;

//       let idx = 0;
//       const newLogData = logData.map(day => ({
//         ...day,
//         exercises: day.exercises.map(() => updatedExercises[idx++])
//       }));

//       setLogData(newLogData);

//     } catch (err) {
//       console.error("Error saving log:", err);
//     }
//   };

//   if (!logData.length) return <p>Loading...</p>;

//   return (
//     <div className="log-container">

//       <h2>Log Workout</h2>

//       {logData.map((day, dayIndex) => (
//         <div key={dayIndex} className="day-block">

//           <h3>{day.day}</h3>

//           {day.exercises.map((ex, exIndex) => {
//             const graphData = getExerciseProgress(ex.name);

//             return (
//               <div key={exIndex} className="exercise-block">

//                 <WorkoutCard
//                   index={exIndex}
//                   title={ex.name}
//                   sets={[`${ex.sets} x ${ex.reps}`]}
//                   mode="log"
//                   exerciseData={ex}
//                   onChange={(updatedEx) =>
//                     handleExerciseChange(dayIndex, exIndex, updatedEx)
//                   }
//                 />

//                 {/* 🔥 GRAPH */}
//                 {graphData.length > 0 && (
//                   <div className="graph-box">
//                     <LineChart width={320} height={200} data={graphData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="date" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line
//                         type="monotone"
//                         dataKey="weight"
//                         stroke="#00c853"
//                         strokeWidth={2}
//                       />
//                     </LineChart>
//                   </div>
//                 )}

//               </div>
//             );
//           })}

//         </div>
//       ))}

//       <button className="save-btn" onClick={saveLog}>
//         Save Workout
//       </button>

//     </div>
//   );
// };

// export default LogWorkout;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import WorkoutCard from "../../components/WorkoutCardui";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid
// } from "recharts";

// const LogWorkout = () => {
//   const [plan, setPlan] = useState(null);
//   const [logs, setLogs] = useState([]);
//   const [logData, setLogData] = useState([]);

//   // 🔥 FETCH PLAN + LOGS
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const [planRes, logsRes] = await Promise.all([
//           axios.get("http://localhost:5000/api/plans", {
//             headers: { Authorization: `Bearer ${token}` }
//           }),
//           axios.get("http://localhost:5000/api/logs", {
//             headers: { Authorization: `Bearer ${token}` }
//           })
//         ]);

//         const userPlan = planRes.data[0];
//         const userLogs = logsRes.data;

//         setPlan(userPlan);
//         setLogs(userLogs);

//         // 🔥 attach lastWeight
//         const updatedDays = userPlan.days.map(day => ({
//           ...day,
//           exercises: day.exercises.map(ex => ({
//             ...ex,
//             lastWeight: getLastWeight(ex.name, userLogs),
//             weight: ""
//           }))
//         }));

//         setLogData(updatedDays);

//       } catch (err) {
//         console.error("Error loading data:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🔥 GET LAST WEIGHT
//   const getLastWeight = (exerciseName, logsData) => {
//     for (let i = logsData.length - 1; i >= 0; i--) {
//       const log = logsData[i];

//       for (let ex of log.exercises) {
//         if (ex.name === exerciseName) {
//           return ex.weight;
//         }
//       }
//     }
//     return null;
//   };

//   // 🔥 GRAPH DATA
//   const getExerciseProgress = (exerciseName) => {
//     const data = [];

//     logs.forEach(log => {
//       const found = log.exercises.find(
//         ex => ex.name === exerciseName
//       );

//       if (found) {
//         data.push({
//           date: new Date(log.date).toLocaleDateString(),
//           weight: found.weight
//         });
//       }
//     });

//     return data;
//   };

//   // 🔥 HANDLE INPUT
//   const handleExerciseChange = (dayIndex, exIndex, updatedExercise) => {
//     const updated = [...logData];
//     updated[dayIndex].exercises[exIndex] = updatedExercise;
//     setLogData(updated);
//   };

//   // 🔥 SAVE LOG
//   const saveLog = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const exercises = logData.flatMap(day => day.exercises);

//       const res = await axios.post(
//         "http://localhost:5000/api/logs",
//         { exercises },
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       );

//       alert("Workout Saved!");

//       // 🔥 update PR UI
//       const updatedExercises = res.data.exercises;

//       let idx = 0;
//       const newLogData = logData.map(day => ({
//         ...day,
//         exercises: day.exercises.map(() => updatedExercises[idx++])
//       }));

//       setLogData(newLogData);

//     } catch (err) {
//       console.error("Error saving log:", err);
//     }
//   };

//   if (!logData.length) return <p>Loading...</p>;

//   return (
//     <div className="log-container">

//       <h2>Log Workout</h2>

//       {logData.map((day, dayIndex) => (
//         <div key={dayIndex} className="day-block">

//           <h3>{day.day}</h3>

//           {day.exercises.map((ex, exIndex) => {
//             const graphData = getExerciseProgress(ex.name);

//             return (
//               <div key={exIndex} className="exercise-block">

//                 <WorkoutCard
//                   index={exIndex}
//                   title={ex.name}
//                   sets={[`${ex.sets} x ${ex.reps}`]}
//                   mode="log"
//                   exerciseData={ex}
//                   onChange={(updatedEx) =>
//                     handleExerciseChange(dayIndex, exIndex, updatedEx)
//                   }
//                 />

//                 {/* 🔥 GRAPH OR MESSAGE */}
//                 <div className="graph-box">

//                   {graphData.length > 1 ? (
//                     <LineChart width={320} height={200} data={graphData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="date" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line
//                         type="monotone"
//                         dataKey="weight"
//                         stroke="#00c853"
//                         strokeWidth={2}
//                       />
//                     </LineChart>
//                   ) : (
//                     <p className="no-graph">
//                       Not enough data yet 📊
//                     </p>
//                   )}

//                 </div>

//               </div>
//             );
//           })}

//         </div>
//       ))}

//       <button className="save-btn" onClick={saveLog}>
//         Save Workout
//       </button>

//     </div>
//   );
// };

// export default LogWorkout;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import WorkoutCard from "../../components/WorkoutCardui";
// import { API_URL } from "../../config";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid
// } from "recharts";

// const LogWorkout = () => {
//   const [logs, setLogs] = useState([]);
//   const [logData, setLogData] = useState([]);

//   // 🔥 FETCH PLAN + LOGS
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");

//         const [planRes, logsRes] = await Promise.all([
//           axios.get(`${API_URL}/api/plans`, {
//             headers: { Authorization: `Bearer ${token}` }
//           }),
//           axios.get(`${API_URL}/api/logs`, {
//             headers: { Authorization: `Bearer ${token}` }
//           })
//         ]);

//         const userPlan = planRes.data[0];
//         const userLogs = logsRes.data;

//         setLogs(userLogs);

//         const updatedDays = userPlan.days.map(day => ({
//           ...day,
//           exercises: day.exercises.map(ex => ({
//             ...ex,
//             lastWeight: getLastWeight(ex.name, userLogs),
//             weight: ""
//           }))
//         }));

//         setLogData(updatedDays);

//       } catch (err) {
//         console.error("Load error:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🔥 GET LAST WEIGHT
//   const getLastWeight = (exerciseName, logsData) => {
//     for (let i = logsData.length - 1; i >= 0; i--) {
//       const log = logsData[i];

//       for (let ex of log.exercises) {
//         if (ex.name === exerciseName) {
//           return ex.weight;
//         }
//       }
//     }
//     return null;
//   };

//   // 🔥 GRAPH DATA (SORTED FIX)
//   const getExerciseProgress = (exerciseName) => {
//     const data = [];

//     logs.forEach(log => {
//       const found = log.exercises.find(
//         ex => ex.name === exerciseName
//       );

//       if (found && found.weight) {
//         data.push({
//           date: new Date(log.date),
//           weight: Number(found.weight)
//         });
//       }
//     });

//     // 🔥 SORT BY DATE
//     data.sort((a, b) => a.date - b.date);

//     return data.map(d => ({
//       ...d,
//       date: d.date.toLocaleDateString()
//     }));
//   };

//   // 🔥 HANDLE INPUT
//   const handleExerciseChange = (dayIndex, exIndex, updatedExercise) => {
//     const updated = [...logData];
//     updated[dayIndex].exercises[exIndex] = updatedExercise;
//     setLogData(updated);
//   };

//   // 🔥 SAVE LOG
//   const saveLog = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const exercises = logData.flatMap(day => day.exercises);

//       const res = await axios.post(
//         `${API_URL}/api/logs`,
//         { exercises },
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       );

//       alert("Workout Saved!");

//       const updatedExercises = res.data.exercises;

//       let idx = 0;
//       const newLogData = logData.map(day => ({
//         ...day,
//         exercises: day.exercises.map(() => updatedExercises[idx++])
//       }));

//       setLogData(newLogData);

//     } catch (err) {
//       console.error("Save error:", err);
//     }
//   };

//   if (!logData.length) return <p>Loading...</p>;

//   return (
//     <div className="log-container">

//       <h2>Log Workout</h2>

//       {logData.map((day, dayIndex) => (
//         <div key={dayIndex} className="day-block">

//           <h3>{day.day}</h3>

//           {day.exercises.map((ex, exIndex) => {
//             const graphData = getExerciseProgress(ex.name);

//             return (
//               <div key={exIndex} className="exercise-block">

//                 <WorkoutCard
//                   index={exIndex}
//                   title={ex.name}
//                   sets={[`${ex.sets} x ${ex.reps}`]}
//                   mode="log"
//                   exerciseData={ex}
//                   onChange={(updatedEx) =>
//                     handleExerciseChange(dayIndex, exIndex, updatedEx)
//                   }
//                 />

//                 <div className="graph-box">
//                   {graphData.length > 1 ? (
//                     <LineChart width={320} height={200} data={graphData}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="date" />
//                       <YAxis />
//                       <Tooltip />
//                       <Line
//                         type="monotone"
//                         dataKey="weight"
//                         stroke="#00c853"
//                         strokeWidth={2}
//                       />
//                     </LineChart>
//                   ) : (
//                     <p className="no-graph">
//                       Not enough data yet 📊
//                     </p>
//                   )}
//                 </div>

//               </div>
//             );
//           })}

//         </div>
//       ))}

//       <button className="save-btn" onClick={saveLog}>
//         Save Workout
//       </button>

//     </div>
//   );
// };

// export default LogWorkout;
import { useEffect, useState } from "react";
import axios from "axios";
import WorkoutCard from "../../components/WorkoutCardui";
import { API_URL } from "../../config";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const LogWorkout = () => {
  const [plan, setPlan] = useState(null);
  const [logs, setLogs] = useState([]);
  const [logData, setLogData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH PLAN + LOGS
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const [planRes, logsRes] = await Promise.all([
          axios.get(`${API_URL}/api/plans`, {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get(`${API_URL}/api/logs`, {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        const userPlan = planRes.data[0];
        const userLogs = logsRes.data;

        setPlan(userPlan);
        setLogs(userLogs);

        if (!userPlan) {
          setLoading(false);
          return;
        }

        // 🔥 Attach lastWeight
        const updatedDays = userPlan.days.map(day => ({
          ...day,
          exercises: day.exercises.map(ex => ({
            ...ex,
            lastWeight: getLastWeight(ex.name, userLogs),
            weight: ""
          }))
        }));

        setLogData(updatedDays);

      } catch (err) {
        console.error("Error loading data:", err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔥 GET LAST WEIGHT
  const getLastWeight = (exerciseName, logsData) => {
    for (let i = logsData.length - 1; i >= 0; i--) {
      const log = logsData[i];

      for (let ex of log.exercises) {
        if (ex.name === exerciseName) {
          return ex.weight;
        }
      }
    }
    return null;
  };

  // 🔥 GRAPH DATA
  const getExerciseProgress = (exerciseName) => {
    const data = [];

    logs.forEach(log => {
      const found = log.exercises.find(
        ex => ex.name === exerciseName
      );

      if (found) {
        data.push({
          date: new Date(log.date).toLocaleDateString(),
          weight: found.weight
        });
      }
    });

    return data;
  };

  // 🔥 HANDLE INPUT
  const handleExerciseChange = (dayIndex, exIndex, updatedExercise) => {
    const updated = [...logData];
    updated[dayIndex].exercises[exIndex] = updatedExercise;
    setLogData(updated);
  };

  // 🔥 SAVE LOG
  const saveLog = async () => {
    const token = localStorage.getItem("token");

    try {
      const exercises = logData.flatMap(day => day.exercises);

      const res = await axios.post(
        `${API_URL}/api/logs`,
        { exercises },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      alert("Workout Saved! ✅");

      // 🔥 Update UI with latest values
      const updatedExercises = res.data.exercises;

      let idx = 0;
      const newLogData = logData.map(day => ({
        ...day,
        exercises: day.exercises.map(() => updatedExercises[idx++])
      }));

      setLogData(newLogData);

    } catch (err) {
      console.error("Error saving log:", err.response?.data || err.message);
      alert("Error saving workout");
    }
  };

  if (loading) return <p>Loading...</p>;

  if (!logData.length) {
    return <p>No workout plan found. Create a plan first.</p>;
  }

  return (
    <div className="log-container">

      <h2>Log Workout</h2>

      {logData.map((day, dayIndex) => (
        <div key={dayIndex} className="day-block">

          <h3>{day.day}</h3>

          {day.exercises.map((ex, exIndex) => {
            const graphData = getExerciseProgress(ex.name);

            return (
              <div key={exIndex} className="exercise-block">

                <WorkoutCard
                  index={exIndex}
                  title={ex.name}
                  sets={[`${ex.sets} x ${ex.reps}`]}
                  mode="log"
                  exerciseData={ex}
                  onChange={(updatedEx) =>
                    handleExerciseChange(dayIndex, exIndex, updatedEx)
                  }
                />

                {/* 🔥 GRAPH */}
                <div className="graph-box">

                  {graphData.length > 1 ? (
                    <LineChart width={320} height={200} data={graphData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#00c853"
                        strokeWidth={2}
                      />
                    </LineChart>
                  ) : (
                    <p className="no-graph">
                      Not enough data yet 📊
                    </p>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      ))}

      <button className="save-btn" onClick={saveLog}>
        Save Workout
      </button>

    </div>
  );
};

export default LogWorkout;