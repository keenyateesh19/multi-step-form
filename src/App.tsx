import { Route, Routes } from "react-router";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import MultiStep from "./layouts/MultiStepForm";


function App() {
  return (
    <Routes>
      <Route element={<MultiStep />} >
        <Route path="/onboarding" element={<PersonalInfo />} />
        
      </Route>
    </Routes>
  );
}

export default App;
