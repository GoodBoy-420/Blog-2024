import React, { useEffect, useState } from "react";
import UseFetch from "../hooks/UseFetch";
import { Spinner, Col, Row, Card } from "react-bootstrap";

const TeamList = () => {
  const { datas, error, isLoading } = UseFetch("/api/v1/teams");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (datas) {
      const sortedTeams = datas.team
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 6);
      setTeams(sortedTeams);
    }
  }, [datas]);
  return (
    <div>
      {isLoading && <Spinner animation="grow" />}
      {error && <p>Error: {error}</p>}
      <Row>
        {teams && teams.length > 0 ? (
          teams.map((team) => (
            <Col key={team._id} xs={12} sm={6} md={4} lg={4}>
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <Card.Body>
                  <Card.Title>{team.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {team.designation}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Experience:</strong> {team.experience}
                  </Card.Text>
                  <Card.Text>
                    <strong>Description:</strong> {team.description}
                  </Card.Text>
                  <Card.Text className="text-muted">
                    <strong>Created At:</strong>{" "}
                    {new Date(team.createdAt).toLocaleString()}
                  </Card.Text>
                  <Card.Text className="text-muted">
                    <strong>Updated At:</strong>{" "}
                    {new Date(team.updatedAt).toLocaleString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <p>No teams found.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default TeamList;
