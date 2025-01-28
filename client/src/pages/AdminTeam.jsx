import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import { Spinner, Table, Button } from "react-bootstrap";

const AdminTeam = () => {
  const navigate = useNavigate();
  const { datas, error, isLoading } = UseFetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/teams`
  );
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    if (datas) {
      setTeamMembers(datas.team);
    }
  }, [datas]);

  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <Button
        variant="primary"
        className="position-absolute"
        style={{ top: "10px", right: "10px" }}
        onClick={handleGoToDashboard}
      >
        Go to Admin Dashboard
      </Button>

      <h2 className="mt-5">All Team Members</h2>

      {isLoading && <Spinner animation="grow" />}
      {error && <p>Error: {error}</p>}

      <div className="table-responsive mt-4">
        {teamMembers && teamMembers.length > 0 ? (
          <Table
            striped
            bordered
            hover
            responsive
            size="sm"
            className="table-sm"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Experience</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member._id}>
                  <td>{member.name}</td>
                  <td>{member.designation}</td>
                  <td>{member.experience}</td>
                  <td>{member.description}</td>
                  <td>
                    <button className="btn btn-info btn-sm">Edit</button>
                    <button className="btn btn-danger btn-sm ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No team members found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminTeam;
