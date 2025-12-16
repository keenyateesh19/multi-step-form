import type { UseFormRegisterReturn } from "react-hook-form";
import type { PersonalInfoFields } from "../pages/PersonalInfo";

export interface TextInputProps {
  name: keyof PersonalInfoFields;
  label: string; // Add separate label prop
  errorTxt?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
}

const TextInput = ({
  name,
  label,
  errorTxt,
  placeholder,
  register,
}: TextInputProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-blue-950" htmlFor={name}>
          {label}
        </label>
        {errorTxt && (
          <span className="text-red-500 text-sm font-semibold">{errorTxt}</span>
        )}
      </div>
      <input
        {...register}
        type="text"
        name={name}
        id={name}
        className={`${
          errorTxt ? "outline-red-500" : "outline-purple-200"
        } outline p-2 rounded-md  focus:outline-purple-500 lg:p-4`}
        required
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
