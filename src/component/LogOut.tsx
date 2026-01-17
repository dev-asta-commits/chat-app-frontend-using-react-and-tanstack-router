import axios from "axios";

export function LogOut() {
    const handleClick = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:5001/api/auth/logout",
                {}, // Empty body for POST
                { withCredentials: true },
            );
            console.log(`Logout success`, response.data);
            alert(`Logout successful!`);
        } catch (error) {
            console.error(`Logout error`, error);
            alert(`Logout failed!`);
        }
    };

    return (
        <button onClick={handleClick} className="btn btn-primary">
            LogOut
        </button>
    );
}
