// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../../config";

// const CreatePlan = () => {
//   const [title, setTitle] = useState("My Weekly Plan");
//   const [days, setDays] = useState([]);
//   const [existingPlanId, setExistingPlanId] = useState(null);

//   const navigate = useNavigate();

//   // 🔥 FETCH EXISTING PLAN
//   useEffect(() => {
//     const fetchPlan = async () => {
//       const token = localStorage.getItem("token");

//       try {
//         const res = await axios.get(`${API_URL}/api/plans`, {
//           headers: { Authorization: `Bearer ${token}` }
//         });

//         if (res.data.length > 0) {
//           setExistingPlanId(res.data[0]._id);
//           setTitle(res.data[0].title);
//           setDays(res.data[0].days);
//         }
//       } catch (err) {
//         console.error("Fetch plan error:", err);
//       }
//     };

//     fetchPlan();
//   }, []);

//   // 🔥 ADD DAY
//   const addDay = () => {
//     setDays([...days, { day: "", exercises: [] }]);
//   };

//   // 🔥 ADD EXERCISE
//   const addExercise = (dayIndex) => {
//     const updated = [...days];
//     updated[dayIndex].exercises.push({
//       name: "",
//       sets: "",
//       reps: ""
//     });
//     setDays(updated);
//   };

//   // 🔥 REMOVE DAY
//   const removeDay = (index) => {
//     const updated = [...days];
//     updated.splice(index, 1);
//     setDays(updated);
//   };

//   // 🔥 REMOVE EXERCISE
//   const removeExercise = (dayIndex, exIndex) => {
//     const updated = [...days];
//     updated[dayIndex].exercises.splice(exIndex, 1);
//     setDays(updated);
//   };

//   // 🔥 SAVE / UPDATE PLAN
//   const savePlan = async () => {
//     const token = localStorage.getItem("token");

//     if (!title || days.length === 0) {
//       alert("Fill plan properly");
//       return;
//     }

//     try {
//       if (existingPlanId) {
//         // 🔥 UPDATE PLAN
//         await axios.put(
//           `${API_URL}/api/plans/${existingPlanId}`,
//           { title, days },
//           {
//             headers: { Authorization: `Bearer ${token}` }
//           }
//         );

//         alert("Plan Updated ✅");
//       } else {
//         // 🔥 CREATE PLAN
//         const res = await axios.post(
//           `${API_URL}/api/plans`,
//           { title, days },
//           {
//             headers: { Authorization: `Bearer ${token}` }
//           }
//         );

//         setExistingPlanId(res.data._id);
//         alert("Plan Created ✅");
//       }

//       navigate("/my-plan");

//     } catch (err) {
//       console.error("Save plan error:", err);
//       alert("Error saving plan");
//     }
//   };

//   return (
//     <div className="create-container">

//       <h2>{existingPlanId ? "Update Plan" : "Create Plan"}</h2>

//       <input
//         placeholder="Plan Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <button className="add-btn" onClick={addDay}>
//         + Add Day
//       </button>

//       {days.map((d, i) => (
//         <div key={i} className="day-box">

//           <div className="day-header">
//             <input
//               placeholder="Day (Monday / Push Day)"
//               value={d.day}
//               onChange={(e) => {
//                 const updated = [...days];
//                 updated[i].day = e.target.value;
//                 setDays(updated);
//               }}
//             />

//             <button onClick={() => removeDay(i)}>❌</button>
//           </div>

//           <button
//             className="add-btn"
//             onClick={() => addExercise(i)}
//           >
//             + Add Exercise
//           </button>

//           {d.exercises.map((ex, j) => (
//             <div key={j} className="exercise-box">

//               <input
//                 placeholder="Exercise"
//                 value={ex.name}
//                 onChange={(e) => {
//                   const updated = [...days];
//                   updated[i].exercises[j].name = e.target.value;
//                   setDays(updated);
//                 }}
//               />

//               <input
//                 placeholder="Sets"
//                 type="number"
//                 value={ex.sets}
//                 onChange={(e) => {
//                   const updated = [...days];
//                   updated[i].exercises[j].sets = e.target.value;
//                   setDays(updated);
//                 }}
//               />

//               <input
//                 placeholder="Reps"
//                 type="number"
//                 value={ex.reps}
//                 onChange={(e) => {
//                   const updated = [...days];
//                   updated[i].exercises[j].reps = e.target.value;
//                   setDays(updated);
//                 }}
//               />

//               <button onClick={() => removeExercise(i, j)}>❌</button>

//             </div>
//           ))}

//         </div>
//       ))}

//       <button className="save-btn" onClick={savePlan}>
//         {existingPlanId ? "Update Plan" : "Save Plan"}
//       </button>

//     </div>
//   );
// };

// export default CreatePlan;
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePlan = () => {
  const [title, setTitle] = useState("My Weekly Plan");
  const [days, setDays] = useState([]);
  const [existingPlanId, setExistingPlanId] = useState(null);

  const navigate = useNavigate();

  // 🔥 FETCH EXISTING PLAN
  useEffect(() => {
    const fetchPlan = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await axios.get(`http://localhost:5000/api/plans`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (res.data.length > 0) {
          setExistingPlanId(res.data[0]._id);
          setTitle(res.data[0].title);
          setDays(res.data[0].days);
        }
      } catch (err) {
        console.error("Fetch plan error:", err);
      }
    };

    fetchPlan();
  }, []);

  // 🔥 ADD DAY
  const addDay = () => {
    setDays([...days, { day: "", exercises: [] }]);
  };

  // 🔥 ADD EXERCISE
  const addExercise = (dayIndex) => {
    const updated = [...days];
    updated[dayIndex].exercises.push({
      name: "",
      sets: "",
      reps: ""
    });
    setDays(updated);
  };

  // 🔥 REMOVE DAY
  const removeDay = (index) => {
    const updated = [...days];
    updated.splice(index, 1);
    setDays(updated);
  };

  // 🔥 REMOVE EXERCISE
  const removeExercise = (dayIndex, exIndex) => {
    const updated = [...days];
    updated[dayIndex].exercises.splice(exIndex, 1);
    setDays(updated);
  };

  // 🔥 SAVE / UPDATE PLAN
  const savePlan = async () => {
    const token = localStorage.getItem("token");

    if (!title || days.length === 0) {
      alert("Fill plan properly");
      return;
    }

    try {
      if (existingPlanId) {
        // 🔥 UPDATE PLAN
        await axios.put(
          `http://localhost:5000/api/plans/${existingPlanId}`,
          { title, days },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        alert("Plan Updated ✅");
      } else {
        // 🔥 CREATE PLAN
        const res = await axios.post(
          `http://localhost:5000/api/plans`,
          { title, days },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setExistingPlanId(res.data._id);
        alert("Plan Created ✅");
      }

      navigate("/my-plan");

    } catch (err) {
      console.error("Save plan error:", err);
      alert("Error saving plan");
    }
  };

  return (
    <div className="create-container">

      <h2>{existingPlanId ? "Update Plan" : "Create Plan"}</h2>

      <input
        placeholder="Plan Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="add-btn" onClick={addDay}>
        + Add Day
      </button>

      {days.map((d, i) => (
        <div key={i} className="day-box">

          <div className="day-header">
            <input
              placeholder="Day (Monday / Push Day)"
              value={d.day}
              onChange={(e) => {
                const updated = [...days];
                updated[i].day = e.target.value;
                setDays(updated);
              }}
            />

            <button onClick={() => removeDay(i)}>❌</button>
          </div>

          <button
            className="add-btn"
            onClick={() => addExercise(i)}
          >
            + Add Exercise
          </button>

          {d.exercises.map((ex, j) => (
            <div key={j} className="exercise-box">

              <input
                placeholder="Exercise"
                value={ex.name}
                onChange={(e) => {
                  const updated = [...days];
                  updated[i].exercises[j].name = e.target.value;
                  setDays(updated);
                }}
              />

              <input
                placeholder="Sets"
                type="number"
                value={ex.sets}
                onChange={(e) => {
                  const updated = [...days];
                  updated[i].exercises[j].sets = e.target.value;
                  setDays(updated);
                }}
              />

              <input
                placeholder="Reps"
                type="number"
                value={ex.reps}
                onChange={(e) => {
                  const updated = [...days];
                  updated[i].exercises[j].reps = e.target.value;
                  setDays(updated);
                }}
              />

              <button onClick={() => removeExercise(i, j)}>❌</button>

            </div>
          ))}

        </div>
      ))}

      <button className="save-btn" onClick={savePlan}>
        {existingPlanId ? "Update Plan" : "Save Plan"}
      </button>

    </div>
  );
};

export default CreatePlan;