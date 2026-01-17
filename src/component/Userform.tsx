import { useState } from "react";
import axios from "axios";

// type imports
import { type formProps } from "../utils/types";

export function UserForm({ formType, apiRoute }: formProps) {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the page from refreshing

        try {
            // Replace with your actual API endpoint
            const response = await axios.post(
                `http://localhost:5001/api/auth/${apiRoute}`,
                formData,
                {
                    withCredentials: true,
                },
            );
            console.log(`${formType} success`, response.data);
            alert(`${formType} successful!`);
        } catch (error) {
            console.error(`${formType} error`, error);
            alert(`${formType} failed!`);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="fieldset bg-base-200 h-fit w-lg  p-12 rounded-2xl"
        >
            <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="username"
                className=" w-full input input-primary outline-0 p-2 rounded-sm mb-4"
            ></input>
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"
                className="w-full input input-primary outline-0 p-2 rounded-sm mb-4"
            ></input>
            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="password"
                className="w-full input input-primary outline-0 p-2 rounded-sm mb-4"
            ></input>
            <button
                type="submit"
                className="btn btn-accent flex flex-col items-center justify-center w-full p-2 rounded-sm mt-4"
            >
                {formType}
            </button>
        </form>
    );
}
