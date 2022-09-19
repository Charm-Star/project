import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import bgVideo from "./media/back.mp4";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" variant="light" style={{height: "70px"}}>
        <Container>
          <Navbar.Brand href="#home">Daily Feeling</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <div style={{color: "black", margin: "10px", fontWeight: "550"}}>
            {" "}
            Login{" "}
          </div>
        </Container>
      </Navbar>
      <video
        muted
        autoPlay
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="DF">
        Daily<br></br>Feeling
      </div>
      <Button
        variant="warning"
        size="lg"
        style={{marginLeft: "45%"}}
        onClick={() => {
          navigate("#");
        }}>
        START WRITTING
      </Button>
    </div>
  );
}

export default App;
