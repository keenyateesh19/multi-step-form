import { createContext, useContext, useReducer } from "react";

export interface MultiStepFormFields {
    step: number;
    name: string;
    email: string;
    phoneNumber: string;
    planType: "Arcade" | "Advanced" | "Pro";
    billType: "Monthly" | "Yearly";
    onlineService: boolean;
    largeStorage: boolean;
    customProfile: boolean;
    total: number;
}

// Define action type
type MultiStepFormAction = {
    type: "UPDATE_FORM";
    data: Partial<MultiStepFormFields>;
}

interface ContextValue {
    state: MultiStepFormFields;
    dispatch: React.Dispatch<MultiStepFormAction>;
}

export const MultiStepFormContext = createContext<ContextValue | null>(null);

const initialState: MultiStepFormFields = {
    step: 1,
    name: "",
    email: "",
    phoneNumber: "",
    planType: "Arcade",
    billType: "Monthly",
    onlineService: false,
    largeStorage: false,
    customProfile: false,
    total: 0
}

const reducer = (state: MultiStepFormFields, action: MultiStepFormAction): MultiStepFormFields => {
    const { type, data } = action;
    switch(type) {
        case "UPDATE_FORM":
            return { ...state, ...data };
        default:
            return state;
    }
}

export const MultiStepFormProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return ( 
        <MultiStepFormContext.Provider value={{ state, dispatch }}>
            {children}
        </MultiStepFormContext.Provider>
     );
}

export function useMutliStepForm() {
    const context = useContext(MultiStepFormContext);
    if(!context) throw new Error("Use this hook within the provider");

    return context;
}