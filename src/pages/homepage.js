import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MessageSection } from "../components/messageDisplay";
import { ChatsDisplay } from "../components/chatsDisplay";
import Container from "react-bootstrap/Container";
const Homepage = () => {
  return (
    <Container className="d-flex">
      <ChatsDisplay />
      <MessageSection />
    </Container>
  );
};
export { Homepage };
