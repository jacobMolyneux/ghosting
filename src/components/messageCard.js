import { useState } from "react";
import Card from "react-bootstrap/Card";
import LockImage from "../photos/padlock.png";

const MessageCard = (props) => {
  let [viewed, setViewed] = useState(false);
  const viewMessage = () => {
    setViewed((viewed = true));
  };
  if (viewed == false) {
    return (
      <Card
        className="m-3 p-2"
        border="primary"
        style={{ width: "18rem" }}
        onClick={viewMessage}
      >
        <Card.Text>Click to View</Card.Text>
        <Card.Img variant="bottom" src={LockImage} />
      </Card>
    );
  } else {
    return (
      <Card
        className="m-3 p-2"
        border="primary"
        style={{ width: "18rem" }}
        onClick={() => setViewed((viewed = false))}
      >
        <Card.Header className="font-weight-bold">{props.author}</Card.Header>
        <Card.Text className="p-3">{props.text}</Card.Text>
      </Card>
    );
  }
};

export { MessageCard };
