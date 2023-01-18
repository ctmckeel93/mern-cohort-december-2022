import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to={"/candies/create"}>Add candy</Link>
            <Link to={"/candies"}>Display Candy</Link>
        </div>
    );
};

export default Nav;
