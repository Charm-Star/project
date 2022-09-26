import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

function Login({inputTitle}) {
  const navigate = useNavigate();

  return (
    <div className="loginBox" style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{color: "white", fontSize: "20px"}}>
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{color: "white", fontSize: "20px"}}>
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <br></br>

        <Button
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "white",
            border: "1px solid white",
            display: "inline-block",
          }}
          variant="primary"
          type="submit"
          size="lg"
          onClick={() => {
            inputTitle[0] !== "" ? navigate("write") : navigate("story");
          }}>
          LogIn
        </Button>
        <Button
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "white",
            border: "1px solid white",
            display: "inline-block",
          }}
          variant="primary"
          type="submit"
          size="lg"
          onClick={() => {
            navigate("join");
          }}>
          Join
        </Button>
      </Form>
    </div>
  );
}
export default Login;
