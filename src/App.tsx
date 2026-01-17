import { LogOut } from "./component/LogOut";
import { UserForm } from "./component/Userform";

// type imports
import { type formProps } from "./utils/types";

const form: formProps = {
    formType: "SignIn",
    apiRoute: "login",
};

export function App() {
    return (
        <div className="flex flex-col h-lvh w-full items-center justify-center">
            <UserForm {...form} />
            <LogOut />
        </div>
    );
}
