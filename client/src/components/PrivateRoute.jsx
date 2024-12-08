// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = localStorage.getItem("adminToken"); // Check if the token is in localStorage

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Component /> : <Navigate to="/admin-login" />}
//     />
//   );
// };

// export default PrivateRoute;
