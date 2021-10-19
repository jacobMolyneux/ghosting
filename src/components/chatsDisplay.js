import Container from "react-bootstrap/Container";
import whiteDude from "../photos/whiteDude.jpg";
import blueDude from "../photos/blueDude.jpg";
import goldWomen from "../photos/goldWomen.jpg";
import purpleModel from "../photos/purpleModel.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const ChatsDisplay = () => {
  return (
    <Container>
      <Col>
        <Row>
          <Image
            src={purpleModel}
            alt="chat button"
            style={{ width: "7rem", height: "7rem" }}
            roundedCircle
          />
        </Row>
        <Row>
          <Image
            src={blueDude}
            alt="chat button"
            style={{ width: "7rem", height: "7rem" }}
            roundedCircle
          />
        </Row>
        <Row>
          <Image
            src={goldWomen}
            alt="chat button"
            style={{ width: "7rem", height: "7rem" }}
            roundedCircle
          />
        </Row>
        <Row>
          <Image
            src={whiteDude}
            alt="chat button"
            style={{ width: "7rem", height: "7rem" }}
            roundedCircle
          />
        </Row>
      </Col>
    </Container>
  );
};
export { ChatsDisplay };
