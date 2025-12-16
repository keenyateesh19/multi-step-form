import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

export interface FormLayoutProps {
  children: React.ReactNode;
  heading: string;
  subHeading: string;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

const FormLayout = ({ children, heading, subHeading, onSubmit }: FormLayoutProps) => {
  return (
    <section className="flex flex-col px-6 w-[90%] shadow-lg rounded-lg mx-auto py-8 absolute right-0 left-0 -top-18 z-10 bg-white lg:top-0 lg:shadow-none lg:w-[85%] lg:relative lg:mx-0 lg:py-0">
      <Heading text={heading} />
      <SubHeading text={subHeading} />
      <form
        className="flex flex-col gap-8 pt-4 justify-center "
        onSubmit={onSubmit}
      >
        {children}
        <div className="bg-white fixed bottom-0 left-0 right-0 flex justify-end p-4 lg:absolute">
          <button
            type="submit"
            className="bg-blue-950 text-white px-6 py-3 rounded-md lg:px-8 lg:py-4 cursor-pointer hover:bg-blue-900"
          >
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormLayout;
