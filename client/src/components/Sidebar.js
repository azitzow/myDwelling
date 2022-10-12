import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../images/brick logo.webp";

export const Sidebar = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setCurrentUser(false);
        navigate("/");
      }
    });
  };

  return (
    <div className="sidebar-container">
      <nav className="nav-bar-menu">
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#5085A5",
                }
              : { color: "#545e6f" }
          }
          to="/"
        >
          <span>
            <h1 className="logo">
              {<img src={Logo} alt={Logo} width="75" height="75" />} My Dwelling
            </h1>
          </span>
        </NavLink>

        {currentUser ? (
          <span>{"WELCOME " + currentUser.username.toUpperCase()}</span>
        ) : null}

        {currentUser ? (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5085A5",
                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
            to="/logout"
            onClick={handleLogout}
          >
            <p>
              <span>Logout</span>
            </p>
          </NavLink>
        ) : (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5085A5",

                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
            to="/login"
          >
            <p>
              <span>Login</span>
            </p>
          </NavLink>
        )}

        {currentUser ? null : (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5085A5",

                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
            to="/signup"
          >
            <p>
              <span>Signup</span>
            </p>
          </NavLink>
        )}
        {currentUser ? (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5085A5",

                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
            to="/createDwelling"
          >
            <p>
              <span>Create A Dwelling</span>
            </p>
          </NavLink>
        ) : null}

        {currentUser ? (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5085A5",

                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
            to="/myDwellings"
          >
            <p>
              <span>My Dwelling List</span>
            </p>

          </NavLink>
        ) : null}

        {currentUser ? (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5085A5",

                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
            to="/calendar"
          >
            <p>
              <span>Schedule</span>
            </p>

          </NavLink>
        ) : null}

        {currentUser ? (
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "#5085A5",

                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
            to="/createMaintenance"
          >
            <p>
              <span>Create a Maintenance</span>
            </p>
          </NavLink>
        ) : null}
      </nav>
    </div>
  );
};
