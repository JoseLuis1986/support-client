import React, { useContext } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
// import { ChatContext } from '../../context/chat/ChatContext';
// import { AuthContext } from '../../auth/AuthContext';
// import { types } from '../../types/types';

// export const Navbar = ({ history }) => {

export const Navbar = () => {

    const { auth, logout } = useContext(AuthContext);

    // const { user: { name }, dispatch } = useContext(AuthContext);
    // // const history = useHistory();
    // const navigate = useNavigate();

    // const handleLogout = () => {

    //     console.log('click!');
    //     // history.replace('/login');
    //     navigate('/login', { replace: true});

    //     dispatch({
    //         type: types.logout,
    //     });

    // }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark px-5">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Tickets soporte
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto">
                        <NavLink
                            className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? 'active' : '') }
                            to="/chat"
                        >
                            Chat
                        </NavLink>
                        <NavLink
                            className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? 'active' : '') }
                            to="/tickets"
                        >
                            Tickets
                        </NavLink>
                        <NavLink
                            className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? 'active' : '') }
                            to="/notes"
                        >
                            Notas
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent" >
                {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end" id="navbarSupportedContent" > */}
                    <ul className="navbar-nav ms-auto">
                        <span className="nav-item nav-link text-info">
                            Bienvenido, {auth.name}
                        </span>
                        <button
                           className="nav-item nav-link btn"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
