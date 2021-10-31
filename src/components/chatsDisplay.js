import Container from "react-bootstrap/Container";
import whiteDude from "../photos/whiteDude.jpg";
import blueDude from "../photos/blueDude.jpg";
import goldWomen from "../photos/goldWomen.jpg";
import purpleModel from "../photos/purpleModel.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import "./componentStyles/chatsDisplay.css";

const ChatsDisplay = () => {
  return (
    <ListGroup>
      <ListGroup.Item className="d-flex" style={{ width: "20rem" }}>
        <img id="ChatPhoto" src={whiteDude} alt="white guy chat" />
        <h3>Robert</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <img id="ChatPhoto" src={goldWomen} alt="Samantha Chat" />
        <h3> Samantha</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <img id="ChatPhoto" src={purpleModel} alt="Olivia" />
        <h3>Olivia</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <img id="ChatPhoto" src={blueDude} alt="Mitch" />
        <h3>Mitch</h3>
      </ListGroup.Item>
    </ListGroup>
  );
};
export { ChatsDisplay };
