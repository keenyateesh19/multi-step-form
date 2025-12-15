import { Outlet } from "react-router";
import SideBar from "../components/SiderBar";

const MultiStepForm = () => {
    return <div className="max-w-full min-h-svh flex flex-col lg:flex-row lg:p-4">
        <SideBar />
        <Outlet />
      </div>;
}
 
export default MultiStepForm;