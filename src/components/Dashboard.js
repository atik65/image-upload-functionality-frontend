import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <br />
      <Link to="admin">Images </Link> <br />
      <Link to="makeadmin">Make Admin</Link> <br />
      <Link to="imageupload">Image Upload</Link> <br />
      <h1> Hello from Dashboard </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
