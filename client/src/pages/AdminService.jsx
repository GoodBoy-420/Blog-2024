import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import { Spinner, Table, Button } from "react-bootstrap";

const AdminService = () => {
  const navigate = useNavigate();
  const { datas, error, isLoading } = UseFetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/services`
  );
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (datas) {
      setServices(datas.services); // Assuming 'datas.services' contains the list of services
    }
  }, [datas]);

  const handleGoToDashboard = () => {
    navigate("/dashboard"); // Navigate to the Admin Dashboard
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

      <h2 className="mt-5">All Services</h2>

      {isLoading && <Spinner animation="grow" />}
      {error && <p>Error: {error}</p>}

      <div className="table-responsive mt-4">
        {services && services.length > 0 ? (
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
                <th>Title</th>
                <th>Description</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service._id}>
                  <td>{service.title}</td>
                  <td>
                    {service.description.length > 100
                      ? `${service.description.substring(0, 100)}...`
                      : service.description}
                  </td>

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
          <p>No services found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminService;
