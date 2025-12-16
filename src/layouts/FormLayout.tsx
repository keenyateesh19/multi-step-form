import { useNavigate } from "react-router";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import { useMutliStepForm } from "../context/MultiStepFormContext";

export interface FormLayoutProps {
  children?: React.ReactNode;
  heading: string;
  subHeading: string;
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

const FormLayout = ({
  children,
  heading,
  subHeading,
  onSubmit,
}: FormLayoutProps) => {
  const {
    state: { step },
    dispatch,
  } = useMutliStepForm();
  const navigate = useNavigate();

  const links = ["/onboarding", "/select-plan", "/add-ons", "/summary"];

  return (
    <section className="flex flex-col px-6 w-[90%] shadow-lg rounded-lg mx-auto py-8 absolute right-0 left-0 -top-18 z-10 bg-white lg:top-0 lg:shadow-none lg:w-[85%] lg:relative lg:mx-0 lg:py-0">
      <Heading text={heading} />
      <SubHeading text={subHeading} />
      <form
        className="flex flex-col gap-8 pt-4 justify-center "
        {...(onSubmit && { onSubmit })}
      >
        {children}
        <div
          className={`bg-white fixed bottom-0 left-0 right-0 flex ${
            step === 1 ? "justify-end" : "justify-between"
          } p-4 lg:absolute`}
        >
          {step > 1 && (
            <button
              className="text-gray-500 hover:text-blue-950 hover:underline cursor-pointer"
              onClick={() =>{
                console.log(step);
                dispatch({ type: "UPDATE_FORM", data: { step: step - 1 } })
                console.log
                navigate(links[step - 2])
              }}
            >
              Go Back
            </button>
          )}
          <button
            type="submit"
            className="bg-blue-950 text-white px-6 py-3 rounded-md font-semibold lg:px-8 lg:py-4 cursor-pointer hover:bg-blue-900"
          >
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormLayout;
