import { NavLink, useNavigate } from "react-router-dom";

export const Sidebar = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(false);
        navigate('/');
      }
    });
  };

  return (
    <div className="sidebar-container">
      <h1 className="logo">MyDwelling</h1>
      <nav className="nav-bar-menu">
        { currentUser ? <span>{ "WELCOME " + currentUser.username.toUpperCase() }</span> : null}

        { currentUser ?
          <NavLink to="/logout" onClick={ handleLogout }>
          <p><span>Logout</span></p>
          </NavLink>
          :
          <NavLink to="/login">
          <p><span>Login</span></p>
          </NavLink>
        }

        { currentUser ? null :
          <NavLink to='/signup'>
            <p><span>Signup</span></p>
          </NavLink>
        }

      </nav>
    </div>
  );
};