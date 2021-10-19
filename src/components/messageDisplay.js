import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const MessageSection = () => {
  let [messages, setMessages] = useState([
    {
      text: "hello",
      author: "Darth Vader",
    },
    {
      text: "Hello",
      author: "Luke Skywalker",
    },
    {
      text: "Luke! I Am your Father!",
      author: "Darth Vader",
    },
    {
      text: "Oh Noooooooooo!",
      author: "Luke Skywalker",
    },
  ]);
  let [newMessage, setNewMessage] = useState("");
  let [newMessageAuthor, setNewMessageAuthor] = useState("");
  const handleNewMessageText = (e) => {
    e.preventDefault();
    setNewMessage((newMessage = e.target.value));
  };
  const handleNewMessageAuthor = (e) => {
    e.preventDefault();
    setNewMessageAuthor((newMessageAuthor = e.target.value));
  };
  const sendMessage = (e) => {
    e.preventDefault();
    let newMessageInfo = { text: newMessage, author: newMessageAuthor };
    setMessages(messages.concat(newMessageInfo));
  };
  let messageDisplay = messages.map((message, index) => (
    <Card
      className="m-3 p-2"
      border="primary"
      style={{ width: "18rem" }}
      key={index}
    >
      <Card.Header className="font-weight-bold">{message.author}</Card.Header>
      <Card.Text className="p-3">{message.text}</Card.Text>
    </Card>
  ));
  return (
    <div id="chatContainer" style={{ width: "70rem" }} className="border ">
      <section className="p-3">{messageDisplay}</section>
      <Form className="d-flex-column justify-content-center">
        <Form.Group>
          <Form.Label>Enter Message:</Form.Label>
          <Form.Control
            type="text"
            onChange={handleNewMessageText}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Your name:</Form.Label>
          <Form.Control
            type="text"
            onChange={handleNewMessageAuthor}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" onClick={sendMessage} className="m-3">
          Send
        </Button>
      </Form>
    </div>
  );
};
export { MessageSection };
