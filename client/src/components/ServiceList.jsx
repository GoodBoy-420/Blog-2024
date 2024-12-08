import React, { useEffect, useState } from "react";
import UseFetch from "../hooks/UseFetch";
import { Spinner, Col, Row, Card } from "react-bootstrap";

const ServiceList = () => {
  const { datas, error, isLoading } = UseFetch("/api/v1/services");
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (datas) {
      const sortedServices = datas.services
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);
      setServices(sortedServices);
    }
  }, [datas]);

  return (
    <div>
      {isLoading && <Spinner animation="grow" />}
      {error && <p>Error: {error}</p>}
      <Row>
        {services && services.length > 0 ? (
          services.map((service) => (
            <Col key={service._id} xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                    <strong>Description:</strong> {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>No services found.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ServiceList;
