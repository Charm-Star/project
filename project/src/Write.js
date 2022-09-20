import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Write() {
  return (
    <div className="container">
      <div className="c1image">
        <img className="banner" alt="banner" src="img/banner.jpg" />
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
        <input type="text" placeholder="제목"></input>

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
          }}>
          글쓰기
        </Button>
      </div>
    </div>
  );
}

export default Write;
