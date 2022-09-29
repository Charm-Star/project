import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

function Login({user, setShowNick}) {
  const navigate = useNavigate();

  return (
    <div className="loginBox" style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color: "white", fontSize: "20px"}}>
          Email address
        </Form.Label>
        <Form.Control
          className="inputID"
          type="text"
          placeholder="Enter email"
          onChange={() => {
            console.log(document.getElementsByClassName("inputID")[0].value);
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color: "white", fontSize: "20px"}}>
          Password
        </Form.Label>
        <Form.Control
          className="inputPW"
          type="password"
          placeholder="Password"
          onChange={() => {
            //비밀 번호
          }}
        />
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
          let ppw = document.getElementsByClassName("inputPW")[0].value;
          let iid = document.getElementsByClassName("inputID")[0].value;

          console.log(checkID(iid, ppw, user));
          checkID(iid, ppw, user).length === 1
            ? navigate("write")
            : alert("로그인 실패");
          setShowNick(true);
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
    </div>
  );
}
function checkID(id, pw, user) {
  let copy = [...user];
  let trueID = copy.filter((data) => {
    return data.id === id && data.password === pw;
  });
  return trueID;
}
export default Login;
