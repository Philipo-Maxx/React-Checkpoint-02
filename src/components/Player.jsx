import React from "react";
import { Card, Button } from "react-bootstrap";
const Player = ({ name, team, nationality, jerseyNumber, age, image_Url }) => {
  return (
    <div className="mt-5">
      <Card style={{}}>
        <Card.Img variant="top" src={image_Url} />
        <div
          className="bg-light"
          style={{ fontSize: "20px", fontStyle: "italic" }}
        >
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{team}</Card.Text>
            <div className="d-flex justify-content-between">
              <Card.Text className="d-inline-block">{nationality}</Card.Text>
              <Card.Text className=" d-inline">{jerseyNumber}</Card.Text>
            </div>

            <Card.Text>{`Age: ${age}`}</Card.Text>

            <div className="text-center">
              <Button variant="primary">Buy Card</Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default Player;
