import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Redirect = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/home");
    }, []);
};

export default Redirect;
