import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

interface IProps {
    children: JSX.Element;
}

const RequireAuth = (props: IProps) => {
    const location = useLocation();
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} />;
    }
    return props.children;
};

export default RequireAuth;