import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const LogInPage = () => {
  let [password, setPassword] = useState("");
  let [username, setUsername] = useState("");
  let [tempPassword, setTempPassword] = useState("");
  let [tempUsername, setTempUsername] = useState("");
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setTempPassword((tempPassword = e.target.value));
  };
  const handleUsernameChange = (e) => {
    e.preventDefault();
    setTempUsername((tempUsername = e.target.value));
  };
  const handleSubmition = () => {
    setPassword((password = tempPassword));
    setUsername((username = tempUsername));
  };
  return (
    <Container
      className="d-flex justify-content-center"
      style={{ width: "100%" }}
    >
      <Form className="border" style={{ width: "30rem" }}>
        <div className="d-flex justify-content-center m-3">
          <h1>Sign In</h1>
        </div>
        <Form.Group className="m-3">
          <Form.Label>
            <h1>Username</h1>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={handleUsernameChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>
            <h1>Password</h1>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          ></Form.Control>
        </Form.Group>
        <Button onClick={handleSubmition} className="m-3">
          LogIn
        </Button>
      </Form>
    </Container>
  );
};
export { LogInPage };
