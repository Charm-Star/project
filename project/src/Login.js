import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="loginBox">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <br></br>

        <Button
          variant="primary"
          type="submit"
          size="lg"
          onClick={() => {
            navigate("story");
          }}>
          LogIn
        </Button>
      </Form>
    </div>
  );
}
export default Login;
