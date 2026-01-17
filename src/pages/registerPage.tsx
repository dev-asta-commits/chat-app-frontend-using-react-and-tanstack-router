import { UserForm } from "../component/Userform";

// type imports
import type { formProps } from "../utils/types";

const form: formProps = {
    formType: "SignUp",
    apiRoute: "register",
};

export function registerPage() {
    return (
        <div>
            <UserForm {...form} />
        </div>
    );
}
