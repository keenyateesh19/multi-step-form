import { Route, Routes } from "react-router";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import MultiStep from "./layouts/MultiStepForm";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

function App() {
  return (
    <Routes>
      <Route element={<MultiStep />} >
        <Route path="/onboarding" element={<PersonalInfo />} />
        <Route path="/select-plan" element={<SelectPlan />} />
        <Route path="/add-ons" element={<AddOns />} />
        <Route path="/summary" element={<Summary />} />
      </Route>
    </Routes>
  );
}

export default App;
