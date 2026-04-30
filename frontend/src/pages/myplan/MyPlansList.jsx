// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { API_URL } from "../../config";

// // const MyPlansList = () => {
// //   const [plans, setPlans] = useState([]);
// //   const navigate = useNavigate();

// //   const fetchPlans = async () => {
// //     const token = localStorage.getItem("token");

// //     try {
// //       const res = await axios.get(`${API_URL}/api/plans`, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });

// //       setPlans(res.data);
// //     } catch (err) {
// //       console.error("Fetch plans error:", err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchPlans();
// //   }, []);

// //   const deletePlan = async (id) => {
// //     const token = localStorage.getItem("token");

// //     try {
// //       await axios.delete(`${API_URL}/api/plans/${id}`, {
// //         headers: { Authorization: `Bearer ${token}` }
// //       });

// //       setPlans(plans.filter(plan => plan._id !== id));
// //     } catch (err) {
// //       console.error("Delete plan error:", err);
// //     }
// //   };

// //   return (
// //     <div className="myplans-container">

// //       <div className="plan-header-top">
// //         <h2>My Plans</h2>
// //         <button onClick={() => navigate("/my-plan/create")}>
// //           + Create Plan
// //         </button>
// //       </div>

// //       {plans.length === 0 && <p>No plans yet</p>}

// //       {plans.map((plan) => (
// //         <div key={plan._id} className="plan-card">

// //           <div className="plan-header">
// //             <h3>{plan.title}</h3>

// //             <button onClick={() => deletePlan(plan._id)}>
// //               Delete
// //             </button>
// //           </div>

// //           {plan.days.map((day, i) => (
// //             <div key={i}>
// //               <h4>{day.day}</h4>

// //               {day.exercises.map((ex, j) => (
// //                 <p key={j}>
// //                   {ex.name} — {ex.sets} x {ex.reps}
// //                 </p>
// //               ))}
// //             </div>
// //           ))}

// //           <button
// //             onClick={() =>
// //               navigate("/my-plan/log", { state: plan })
// //             }
// //           >
// //             Start Workout
// //           </button>

// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MyPlansList;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../../config";

// const MyPlansList = () => {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // 🔥 FETCH PLANS
//   const fetchPlans = async () => {
//     const token = localStorage.getItem("token");
  
//     if (!token) {
//       setLoading(false);
//       return;
//     }
  
//     const cached = sessionStorage.getItem("plans");
//     if (cached) {
//       setPlans(JSON.parse(cached));
//       setLoading(false);
//       return;
//     }
  
//     try {
//       const res = await axios.get(`${API_URL}/api/plans`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
  
//       setPlans(res.data);
  
//       sessionStorage.setItem("plans", JSON.stringify(res.data));
  
//     } catch (err) {
//       console.error("Fetch plans error:", err.response?.data || err.message);
  
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔥 DELETE PLAN
//   const deletePlan = async (id) => {
//     const confirmDelete = window.confirm("Delete this plan?");
//     if (!confirmDelete) return;

//     const token = localStorage.getItem("token");

//     try {
//       await axios.delete(`${API_URL}/api/plans/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       setPlans(plans.filter(plan => plan._id !== id));

//     } catch (err) {
//       console.error("Delete plan error:", err.response?.data || err.message);
//       alert("Error deleting plan");
//     }
//   };

//   if (loading) return <p>Loading plans...</p>;

//   return (
//     <div className="myplans-container">

//       <div className="plan-header-top">
//         <h2>My Plans</h2>
//         <button onClick={() => navigate("/my-plan/create")}>
//           + Create Plan
//         </button>
//       </div>

//       {plans.length === 0 ? (
//         <p>No plans yet</p>
//       ) : (
//         plans.map((plan) => (
//           <div key={plan._id} className="plan-card">

//             <div className="plan-header">
//               <h3>{plan.title}</h3>

//               <button onClick={() => deletePlan(plan._id)}>
//                 Delete
//               </button>
//             </div>

//             {plan.days?.map((day, i) => (
//               <div key={i}>
//                 <h4>{day.day}</h4>

//                 {day.exercises?.map((ex, j) => (
//                   <p key={j}>
//                     {ex.name} — {ex.sets} x {ex.reps}
//                   </p>
//                 ))}
//               </div>
//             ))}

//             <button
//               onClick={() =>
//                 navigate("/my-plan/log", { state: plan })
//               }
//             >
//               Start Workout
//             </button>

//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyPlansList;
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const MyPlansList = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPlans = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    const cached = sessionStorage.getItem("plans");
    const cacheTime = sessionStorage.getItem("plans_time");

    if (cached && cacheTime && Date.now() - cacheTime < 5 * 60 * 1000) {
      setPlans(JSON.parse(cached));
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(`${API_URL}/api/plans`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setPlans(res.data);

      sessionStorage.setItem("plans", JSON.stringify(res.data));
      sessionStorage.setItem("plans_time", Date.now());

    } catch (err) {
      console.error("Fetch plans error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  // 🔥 DELETE PLAN
  const deletePlan = async (id) => {
    const confirmDelete = window.confirm("Delete this plan?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    try {
      await axios.delete(`${API_URL}/api/plans/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const updatedPlans = plans.filter(plan => plan._id !== id);

      setPlans(updatedPlans);

      sessionStorage.setItem("plans", JSON.stringify(updatedPlans));
      sessionStorage.setItem("plans_time", Date.now());

    } catch (err) {
      console.error("Delete plan error:", err.response?.data || err.message);
    }
  };

  if (loading) return <p>Loading your plans...</p>;

  return (
    <div className="myplans-container">

      <div className="plan-header-top">
        <h2>My Plans</h2>

        <button onClick={() => navigate("/my-plan/create")}>
          + Create Plan
        </button>
      </div>

      {plans.length === 0 ? (
        <p>No plans yet</p>
      ) : (
        plans.map((plan) => (
          <div key={plan._id} className="plan-card">

            <div className="plan-header">
              <h3>{plan.title}</h3>

              <button onClick={() => deletePlan(plan._id)}>
                Delete
              </button>
            </div>

            {plan.days?.map((day, i) => (
              <div key={i}>
                <h4>{day.day}</h4>

                {day.exercises?.map((ex, j) => (
                  <p key={j}>
                    {ex.name} — {ex.sets} x {ex.reps}
                  </p>
                ))}
              </div>
            ))}

            <button
              onClick={() =>
                navigate("/my-plan/log", { state: plan })
              }
            >
              Start Workout
            </button>

          </div>
        ))
      )}
    </div>
  );
};

export default MyPlansList;