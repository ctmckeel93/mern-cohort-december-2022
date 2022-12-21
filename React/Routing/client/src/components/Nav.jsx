import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={"/home"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/hello"}>Hello</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
