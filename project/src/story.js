import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Ratio from "react-bootstrap/Ratio";
import Daily from "./Daily";
import "./App.css";
function Story() {
  return (
    <div className="container">
      <div className="c1image">
        <img className="phoneImage" alt="iPhone_01" src="img/banner.jpg" />
        <Daily></Daily>
      </div>
    </div>
  );
}

export default Story;
