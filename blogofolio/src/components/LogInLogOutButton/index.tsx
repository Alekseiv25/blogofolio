import { useNavigate } from "react-router-dom";
import { useAuth } from "../hoc/AuthProvider";

interface IProps {
    value: "Log in" | "Log out";
    navigationAdress?: string;
}

const LogInLogOutButton = (props: IProps) => {
    const { value, navigationAdress = "" } = props;
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const goToAdress = () => {
        navigate(`${navigationAdress}`);
    };

    const logOutAndGoHome = () => {
        signOut(() => {
            navigate("/");
        });
    };
    return (
        <input
            type="button"
            value={value}
            onClick={value === "Log out" ? logOutAndGoHome : goToAdress}
        />
    );
};

export default LogInLogOutButton;