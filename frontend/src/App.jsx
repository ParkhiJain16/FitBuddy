import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Workout from "./components/Workout";
import Male from "./components/Male";
import Female from "./components/Female.jsx";
import PushPullLegs from "./components/PushPullLegs";
import PPL from "./components/PPLFemale.jsx";
import PPLI from "./components/PPLFemaleInter.jsx";
import PPLA from "./components/PPLFemaleAd.jsx";
import BenchPress from "./components/workouts/PPL/BenchPress.jsx";
import OverHeadPress from "./components/workouts/PPL/OverHeadPress.jsx";
import InclineDB from "./components/workouts/PPL/inclineDB.jsx";
import LateralRaises from "./components/workouts/PPL/LateralRaises.jsx";
import TricepPushDown from "./components/workouts/PPL/TricepPushDown.jsx";
import BarbelRow from "./components/workouts/PPL/BarbelRow.jsx";
import PullUp from "./components/workouts/PPL/PullUp.jsx";
import SCR from "./components/workouts/PPL/SCR.jsx";
import Barbell from "./components/workouts/PPL/Barbell.jsx";
import BackSquats from "./components/workouts/PPL/BackSquats.jsx";
import LegPress from "./components/workouts/PPL/legPress.jsx";
import Cr from "./components/workouts/PPL/Cr.jsx";
import RDL from "./components/workouts/PPL/RDL.jsx";
import WL from "./components/workouts/PPL/walkLunges.jsx";
import SP from "./components/workouts/PPL/ShoulderPress.jsx";
import CF from "./components/workouts/PPL/cabel.jsx";
import SC from "./components/workouts/PPL/SC.jsx";
import LE from "./components/workouts/PPL/LE.jsx";
import LP from "./components/workouts/PPL/LP.jsx";
import HC from "./components/workouts/PPL/HC.jsx";
import FatLoss from "./components/Fatloss.jsx";
import Planks from "./components/workouts/FatLoss/plank.jsx";
import Burpee from "./components/workouts/FatLoss/burpee.jsx";
import Mountain from "./components/workouts/FatLoss/mountain.jsx";
import PushUps from "./components/workouts/FatLoss/Push.jsx";
import High from "./components/workouts/FatLoss/high.jsx";
// import MyPlan from "./components/MyPlan.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import MyPlan from "./pages/myplan/myplan.jsx";
import CreatePlan from "./pages/myplan/CreatePlan";
import LogWorkout from "./pages/myplan/LogWorkout";
import AIChat from "./pages/AIChat";

function Home() {
  return (
    <>
      <Hero />

      <Feature
        title="Log Workouts"
        desc="A workout tracking app that just works. Everything you need to log your workouts and smash your goals."
        points={[
          "Intuitive Workout Logging",
          "Advanced Routine Planner",
          "Mark Warmup, Drop, and Failure Sets",
          "Automatic Rest Timers",
          "Add Exercise Notes"
        ]}
        imag="https://cdn.pixabay.com/photo/2021/02/03/11/32/gym-5977600_1280.jpg"
      />

      <Feature
        title="Smart Tracking"
        desc="See your progress as it happens and Staying motivated is easier when you can see how far you’ve come."
        points={[
          "Advanced Exercise Charts",
          "Personal Records",
          "Create Your Own Custom Exercises",
          "Complete Exercise History"
        ]}
        imag="https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg"
        reverse={true}
      />

      <Feature
        title="Monitored Recovery"
        desc="Understand how your body is recovering and get smart recommendations on what to train next based on your performance and fatigue levels."
        points={[
          "Uses your training history to understand your progress",
           "Tracks recovery to avoid overtraining",
           "Recommends the right muscles for each session",
           "Eliminates guesswork from your workouts",
          "Helps you train with confidence every day"
        ]}
        imag="https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg"
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AIChat />} />
        <Route path="/workout" element={<Workout />} />
        {/* <Route path="/myplan" element={<MyPlan />} /> */}
        {/* <Route path = "/my-plan" element = {<MyPlan />} /> */}
        <Route path="/my-plan" element={<ProtectedRoute><MyPlan /></ProtectedRoute>} />
        {/* <Route path="/my-plan/create" element={<CreatePlan />} /> */}
        <Route path="/my-plan/create" element={<ProtectedRoute><CreatePlan /></ProtectedRoute>} />
        <Route path="/my-plan/log" element={<ProtectedRoute><LogWorkout /></ProtectedRoute>} />
        <Route path="/male" element={<Male />} />
        <Route path = "/women" element={<Female />} />
        <Route path="/PushPullLegs" element={<PushPullLegs />} />
        <Route path = "/PPLFemale" element={<PPL />} />
        <Route path = "/PPLFemaleInter" element={<PPLI />} />
        <Route path = "/PPLFemaleAd" element={<PPLA />} />
        <Route path="/benchpress" element={<BenchPress />} />
        <Route path="/overheadpress" element={<OverHeadPress />} />
        <Route path="/inclineDB" element={<InclineDB />} />
        <Route path = "/lateralRaises" element={<LateralRaises />} />
        <Route path = "/tricepPushDown" element={<TricepPushDown />} />
        <Route path = "/barbelRow" element={<BarbelRow />} />
        <Route path="/pullUps" element={<PullUp />} />
        <Route path = "/scr" element={<SCR />} />
        <Route path = "/barbell" element={<Barbell />} />
        <Route path = "/backsquats" element = {<BackSquats />} />
        <Route path = "/legpress" element={<LegPress />} />
        <Route path= "/Cr" element = {<Cr />} />
        <Route path = "/WalkLunges" element={<WL />} />
        <Route path= "/rdl" element={<RDL />} />
        <Route path="/shoulderpress" element={<SP />} />
        <Route path = "/cablefly" element={<CF />} />
        <Route path = "/skullcrusher" element={<SC />} />
        <Route path = "/legextention" element={<LE />} />
        <Route path = "/latpulldown" element={<LP />} />
        <Route path = "/hammercurl" element={<HC />} />


        <Route path="/fatloss" element={<FatLoss />} />
        <Route path="/planks" element={<Planks />} />
        <Route path = "/burpee" element={<Burpee />} />
        <Route path = "/mountainclimber" element={<Mountain />} />
        <Route path = "/pushups" element={<PushUps />} />
        <Route path ="/highknees" element= {<High />} />
      </Routes>
    </Router>
  );
}

export default App;