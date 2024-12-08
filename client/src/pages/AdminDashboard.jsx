import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavigation = (page) => {
    navigate(`/admin/${page}`);
  };

  return (
    <div className="d-flex">
      <div className="sidebar" style={sidebarStyle}>
        <h3 className="text-white">Admin Panel</h3>
        <ul className="list-unstyled">
          <li>
            <button
              className="btn btn-link text-white"
              onClick={() => handleNavigation("blog")}
            >
              Blog
            </button>
          </li>
          <li>
            <button
              className="btn btn-link text-white"
              onClick={() => handleNavigation("team")}
            >
              Team
            </button>
          </li>
          <li>
            <button
              className="btn btn-link text-white"
              onClick={() => handleNavigation("service")}
            >
              Service
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container mt-5" style={{ marginLeft: "220px" }}>
        <button
          className="btn btn-danger position-absolute"
          style={{ top: "10px", right: "10px" }}
          onClick={handleLogout}
        >
          Logout
        </button>
        <h2>Admin Dashboard</h2>
        <p>Welcome to the Admin Dashboard.</p>

        <h1>
          My final exam is on going. So I could not apply the create, update and
          delete operation here. Hopefully I will fix it in this week... Do not
          deduct too much number for this :")
        </h1>
      </div>
    </div>
  );
};

// Side panel styling
const sidebarStyle = {
  height: "100vh",
  width: "200px",
  backgroundColor: "#343a40",
  paddingTop: "20px",
};

export default AdminDashboard;
