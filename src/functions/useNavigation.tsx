import { To, useNavigate } from 'react-router-dom';

export const useNavigation = () => {
    const navigate = useNavigate();

    const NavigateTo = (address: To) => () => {
        navigate(address);
    };

    return NavigateTo;
};
export default useNavigation;