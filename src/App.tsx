import { Route, Routes } from "react-router";
import "./App.css";
import MultiStep from "./layouts/MultiStepForm";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import { MultiStepFormProvider } from "./context/MultiStepFormContext";

function App() {
  return (
    <MultiStepFormProvider>
      <Routes>
        <Route element={<MultiStep />}>
          <Route path="onboarding" element={<PersonalInfo />} />
          <Route path="select-plan" element={<SelectPlan />} />
          <Route path="add-ons" element={<AddOns />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </MultiStepFormProvider>
  );
}

export default App;
