// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
// } from "recharts";
// const Progress = () => {
//     const [logs, setLogs] = useState([]);
//     const [selectedExercise, setSelectedExercise] = useState("Bench Press");
//     const [chartData, setChartData] = useState([]);
//     useEffect(() => {
//         const fetchLogs = async () => {
//           const token = localStorage.getItem("token");
    
//           const res = await axios.get(
//             "http://localhost:5000/api/logs",
//             {
//               headers: { Authorization: `Bearer ${token}` }
//             }
//           );
    
//           setLogs(res.data);
//         };
//         fetchLogs();
//     },[]);
//     useEffect(() => {
//         const data = [];
    
//         logs.forEach(log => {
//           log.exercises.forEach(ex => {
//             if (ex.name === selectedExercise) {
//               data.push({
//                 date: new Date(log.date).toLocaleDateString(),
//                 weight: ex.weight
//               });
//             }
//           });
//         });
//         setChartData(data);
//     }, [logs, selectedExercise]);
//     return (
//         <div>
//           <h2>Progress Tracker</h2>
    
//           {/* 🔥 Select Exercise */}
//           <select
//             value={selectedExercise}
//             onChange={(e) => setSelectedExercise(e.target.value)}
//           >
//             <option>Bench Press</option>
//             <option>Squats</option>
//             <option>Deadlift</option>
//         </select>
//         {/* 🔥 Graph */}
//       <LineChart width={500} height={300} data={chartData}>
//         <CartesianGrid stroke="#ccc" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="weight" stroke="#00ff88" />
//       </LineChart>
//     </div>
//   );
// };
// export default Progress;
// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid
// // } from "recharts";
// // import { API_URL } from "../config";

// // const Progress = () => {
// //   const [logs, setLogs] = useState([]);
// //   const [selectedExercise, setSelectedExercise] = useState("Bench Press");
// //   const [chartData, setChartData] = useState([]);

// //   // 🔥 FETCH LOGS
// //   useEffect(() => {
// //     const fetchLogs = async () => {
// //       const token = localStorage.getItem("token");

// //       try {
// //         const res = await axios.get(`${API_URL}/api/logs`, {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });

// //         setLogs(res.data);
// //       } catch (err) {
// //         console.error("Error fetching logs:", err);
// //       }
// //     };

// //     fetchLogs();
// //   }, []);

// //   // 🔥 PREPARE GRAPH DATA
// //   useEffect(() => {
// //     if (!logs.length) return;

// //     const data = [];

// //     logs.forEach((log) => {
// //       log.exercises.forEach((ex) => {
// //         if (ex.name === selectedExercise && ex.weight) {
// //           data.push({
// //             date: new Date(log.date).toLocaleDateString(),
// //             weight: Number(ex.weight)
// //           });
// //         }
// //       });
// //     });

// //     // 🔥 SORT BY DATE (VERY IMPORTANT)
// //     data.sort((a, b) => new Date(a.date) - new Date(b.date));

// //     setChartData(data);
// //   }, [logs, selectedExercise]);

// //   return (
// //     <div className="progress-container">
// //       <h2>Progress Tracker 📈</h2>

// //       {/* 🔥 EXERCISE SELECT */}
// //       <select
// //         value={selectedExercise}
// //         onChange={(e) => setSelectedExercise(e.target.value)}
// //       >
// //         <option>Bench Press</option>
// //         <option>Squats</option>
// //         <option>Deadlift</option>
// //       </select>

// //       {/* 🔥 GRAPH */}
// //       <div className="graph-box">
// //         {chartData.length > 1 ? (
// //           <LineChart width={500} height={300} data={chartData}>
// //             <CartesianGrid strokeDasharray="3 3" />
// //             <XAxis dataKey="date" />
// //             <YAxis />
// //             <Tooltip />
// //             <Line
// //               type="monotone"
// //               dataKey="weight"
// //               stroke="#00ff88"
// //               strokeWidth={2}
// //             />
// //           </LineChart>
// //         ) : (
// //           <p>No enough data to show progress 📊</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Progress;
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";
import { API_URL } from "../../config";

const Progress = () => {
  const [logs, setLogs] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [chartData, setChartData] = useState([]);
  const [exerciseList, setExerciseList] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH LOGS
  useEffect(() => {
    const fetchLogs = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(`${API_URL}/api/logs`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const fetchedLogs = res.data;
        setLogs(fetchedLogs);

        // 🔥 Extract unique exercises dynamically
        const exerciseSet = new Set();

        fetchedLogs.forEach(log => {
          log.exercises.forEach(ex => {
            if (ex.name) exerciseSet.add(ex.name);
          });
        });

        const exerciseArray = Array.from(exerciseSet);
        setExerciseList(exerciseArray);

        if (exerciseArray.length > 0) {
          setSelectedExercise(exerciseArray[0]);
        }

      } catch (err) {
        console.error("Error fetching logs:", err.response?.data || err.message);
        alert("Failed to load progress");

      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  // 🔥 PREPARE GRAPH DATA
  useEffect(() => {
    if (!logs.length || !selectedExercise) return;

    const data = [];

    logs.forEach((log) => {
      log.exercises.forEach((ex) => {
        if (ex.name === selectedExercise && ex.weight) {
          data.push({
            date: new Date(log.date).toLocaleDateString(),
            weight: Number(ex.weight)
          });
        }
      });
    });

    // 🔥 Sort by date (IMPORTANT)
    data.sort((a, b) => new Date(a.date) - new Date(b.date));

    setChartData(data);
  }, [logs, selectedExercise]);

  if (loading) return <p>Loading progress...</p>;

  return (
    <div className="progress-container">

      <h2>Progress Tracker 📈</h2>

      {/* 🔥 EXERCISE SELECT */}
      {exerciseList.length > 0 ? (
        <select
          value={selectedExercise}
          onChange={(e) => setSelectedExercise(e.target.value)}
        >
          {exerciseList.map((ex, i) => (
            <option key={i} value={ex}>
              {ex}
            </option>
          ))}
        </select>
      ) : (
        <p>No exercises found</p>
      )}

      {/* 🔥 GRAPH */}
      <div className="graph-box">

        {chartData.length > 1 ? (
          <LineChart width={500} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="weight"
              stroke="#00ff88"
              strokeWidth={2}
            />
          </LineChart>
        ) : (
          <p>Not enough data to show progress 📊</p>
        )}

      </div>

    </div>
  );
};

export default Progress;