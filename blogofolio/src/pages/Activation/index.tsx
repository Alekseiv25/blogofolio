import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { activateUserAsyncAction } from "../../store/reducers/activateReducer/actions";
import { AppState } from "../../store/store";


const Activation = () => {
    const navigate = useNavigate();
    const { uid, token } = useParams();
    const dispatch = useDispatch();
    const activate = useSelector((state: AppState) => state.activate);
    useEffect(() => {
        if (uid && token) {
            dispatch(activateUserAsyncAction(uid, token, () => navigate("/success")));
        }
    }, [navigate, token, uid, dispatch]);

    return (
        <div>
            Activation
            <div>{JSON.stringify(activate)}</div>

        </div>
    );
};

export default Activation;