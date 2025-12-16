export interface SubHeadingProps {
    text: string;
}

const SubHeading = ({text}: SubHeadingProps) => {
    return ( <p className="font-light mt-2 text-gray-500">{text}</p> );
}
 
export default SubHeading;