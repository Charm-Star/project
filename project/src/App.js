import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {Route, useNavigate, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Login from "./Login";
import Story from "./story";
import BackMovie from "./backMovie";

function App() {
  let [showLog, setShowLog] = useState(false);
  const navigate = useNavigate();
  let [opaclass, setOpaclass] = useState("");
  const time = useEffect(() => {
    setTimeout(() => {
      setOpaclass("aniTo");
    }, 500);

    return () => {
      clearTimeout(time);
      setOpaclass("");
    };
  }, []);
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
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <BackMovie></BackMovie>
              {showLog === true ? (
                <Login></Login>
              ) : (
                <div>
                  <div className={"DF " + opaclass}>
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
          }></Route>
        <Route path="story" element={<Story></Story>}></Route>
      </Routes>
    </div>
  );
}

export default App;
