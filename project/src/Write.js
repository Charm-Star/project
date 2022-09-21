import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";
import {useNavigate} from "react-router-dom";

function Write({setInputContent, setInputTitle, inputTitle, inputContent}) {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="c1image">
        <img className="banner" alt="banner" src="img/sunset.jpg" />
      </div>
      <div
        className="writeBox"
        style={{
          backgroundColor: "lightgray",
          marginTop: "0px",
          borderRadius: "3px",
          padding: "10px",
          fontFamily: "'Jua', sans-serif",
        }}>
        <p>Author:</p>
        <input
          className="diaryTitle"
          style={{
            width: "100%",
            height: "50px",
            fontSize: "25px",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="제목"></input>
        <p>내용</p>
        <div style={{height: "500px", fontSize: "25px"}}>
          <textarea className="textArea"></textarea>
        </div>
        {["radio"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`공개`}
              name="showOrNot"
            />

            <Form.Check
              type={type}
              label={`비공개`}
              id={`default-${type}`}
              name="showOrNot"
            />
          </div>
        ))}
        <Button
          size="lg"
          style={{
            marginLeft: "45%",
          }}
          onClick={() => {
            let copy = [...inputTitle];
            let tititle = document.getElementsByClassName("diaryTitle");
            copy.push(tititle[0].value);
            console.log(copy);
            setInputTitle(copy);
            let cocopy = [...inputContent];
            let cocotent = document.getElementsByClassName("textArea");
            console.log(cocotent[0].value);
            console.log(cocotent[0].value);
            cocopy.push(cocotent[0].value);
            setInputContent(cocopy);
            navigate("/story");
          }}>
          글쓰기
        </Button>
      </div>
    </div>
  );
}

export default Write;
