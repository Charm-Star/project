import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import bgVideo from "./media/back.mp4";
import Button from "react-bootstrap/Button";
import {Route, useNavigate, Routes} from "react-router-dom";
import {useState} from "react";

import Login from "./Login";

function App() {
  let [showLog, setShowLog] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" variant="light" style={{height: "70px"}}>
        <Container>
          <Navbar.Brand href="/">Daily Feeling</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <div style={{color: "black", margin: "10px", fontWeight: "550"}}>
            {" "}
            Login{" "}
          </div>
        </Container>
      </Navbar>

      {
        <div>
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
          {showLog === true ? (
            <Login></Login>
          ) : (
            <div>
              <div className="DF">
                Daily<br></br>Feeling
              </div>
              <Button
                variant="warning"
                size="lg"
                style={{marginLeft: "45%"}}
                onClick={() => {
                  setShowLog(true);
                }}>
                START WRITTING
              </Button>
            </div>
          )}
        </div>
      }
    </div>
  );
}

export default App;
