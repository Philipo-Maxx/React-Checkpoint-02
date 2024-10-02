import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";

const PlayerList = ({ playerList }) => {
  return (
    <div>
      <Container>
        <Row>
          {playerList.map((player) => (
            <Col key={player.id} md={3} sm={6}>
              <Player
                name={player.name}
                team={player.team}
                nationality={player.nationality}
                jerseyNumber={player.jerseyNumber}
                age={player.age}
                image_Url={player.image_Url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PlayerList;
