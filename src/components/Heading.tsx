export interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <h1 className="text-2xl lg:text-4xl font-bold text-blue-950">{text}</h1>
  );
};

export default Heading;
