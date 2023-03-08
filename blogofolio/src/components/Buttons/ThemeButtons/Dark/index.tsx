import { useDispatch, useSelector } from "react-redux";
import { ThemeNightAction } from "../../../../store/reducers/themeReducer/actions";
import { getThemeSelector } from "../../../../store/selectors/selectors";

export const DarkBtn = () => {
    const dispatch = useDispatch()
    const changeThemeDay = () => { dispatch(ThemeNightAction()) }
    const theme = useSelector(getThemeSelector)

    return (
        <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={changeThemeDay}
        >
            <path
                fill={`${theme.color === '#313037' ? "#DADADA" : "#313037"}`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.27767 4.43848C6.41967 5.47248 4.32467 
            8.08248 4.03367 11.2255C3.62867 15.6185 6.87167 
            19.5215 11.2647 19.9275C13.3867 20.1265 15.4677 
            19.4795 17.1127 18.1155C18.2237 17.1915 19.0477 
            16.0125 19.5247 14.6895C17.0557 15.5925 14.2557 
            15.2275 12.0467 13.5935C9.13667 11.4435 8.10667 
            7.67948 9.27767 4.43848ZM12.0178 21.9624C11.7068 
            21.9624 11.3938 21.9484 11.0808 21.9194C5.58982 
            21.4114 1.53582 16.5324 2.04282 11.0424C2.48582 
            6.24841 6.28682 2.44741 11.0808 2.00441C11.4678 
            1.96741 11.8498 2.16541 12.0438 2.50841C12.2368 
            2.85241 12.2108 3.27741 11.9768 3.59441C10.0098 
            6.25441 10.5748 10.0194 13.2348 11.9854C15.3688 
            13.5634 18.2358 13.5624 20.3678 11.9854C20.6848 
            11.7514 21.1098 11.7254 21.4538 11.9184C21.7968 
            12.1124 21.9948 12.4894 21.9588 12.8814C21.7128 
            15.5424 20.4458 17.9464 18.3908 19.6534C16.5788 
            21.1594 14.3438 21.9624 12.0178 21.9624Z" />
        </svg>
    )
}