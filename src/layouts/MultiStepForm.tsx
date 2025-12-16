import { Outlet } from "react-router";
import SideBar from "../components/SiderBar";

const MultiStepForm = () => {
  return (
    <div className="max-w-full min-h-svh flex flex-col relative lg:flex-row lg:p-4">
      <SideBar />
      <div className="lg:p-12 lg:flex-1 relative flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default MultiStepForm;
