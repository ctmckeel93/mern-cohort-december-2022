import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav flex-row align-items-center gap-3">
                        <li className="nav-item">
                            <h3 className="text-light navbar-brand">Chat App</h3>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/"}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/rooms"}>
                                Make a private room
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/rooms/all"}>
                                Join a private room
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;
