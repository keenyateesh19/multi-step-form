import { useNavigate } from "react-router";
import TextInput from "../components/TextInput";
import { useForm } from "react-hook-form";
import FormLayout from "../layouts/FormLayout";

export interface PersonalInfoFields {
  name: string;
  email: string;
  phoneNumber: string;
}

const PersonalInfo = () => {
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFields>();
  function onSubmit(data: PersonalInfoFields) {
    console.log(data);
    redirect("/select-plan");
  }

  return (
    <FormLayout
      heading="Personal info"
      subHeading="Please provide your name, email address, and phone number."
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        name="name"
        label="Name"
        placeholder="e.g.Stephen King"
        errorTxt={errors.name?.message}
        register={register("name", {
          required: "This field is required",
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Name can only contain letters and spaces",
          },
        })}
      />
      <TextInput
        name="email"
        label="Email Address"
        placeholder="e.g.stephenking@lorem.com"
        errorTxt={errors.email?.message}
        register={register("email", {
          required: "This field is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
          },
        })}
      />
      <TextInput
        name="phoneNumber"
        label="Phone Number"
        placeholder="e.g.+1 234 567 890"
        errorTxt={errors.phoneNumber?.message}
        register={register("phoneNumber", {
          required: "This field is required",
          pattern: {
            value: /^\+?[0-9\s-]+$/,
            message: "Please enter a valid phone number",
          },
          minLength: {
            value: 7,
            message: "Phone number must be at least 7 digits",
          },
        })}
      />
    </FormLayout>
  );
};

export default PersonalInfo;
