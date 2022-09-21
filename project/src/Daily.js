import Card from "react-bootstrap/Card";
import {useState} from "react";
// function Daily({inputTitle, inputContent}) {
function Daily({inputTitle, inputContent, titleIndex}) {
  let now = new Date();
  let [featherCnt, setFeatherCnt] = useState(0);
  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();

  return (
    <div style={{width: "100%", height: "100%", backgroundColor: "lightgrey"}}>
      <div style={{padding: "30px", margin: "0 auto"}}>
        <Card style={{width: "100%", height: "100%"}}>
          <Card.Body style={{width: "100%", height: "100%"}}>
            <Card.Title
              style={{fontFamily: "'Jua', sans-serif", fontSize: "35px"}}>
              {inputTitle}
            </Card.Title>
            <Card.Subtitle
              style={{marginTop: "50px", marginLeft: "40px"}}
              className="mb-2 text-muted">
              {`작성일 ${year}.${month + 1}.${date}`}
            </Card.Subtitle>
            <Card.Text
              style={{
                margin: "0 auto",
                width: "60%",
                marginTop: "100px",
                fontSize: "20px",
                fontFamily: "'Jua', sans-serif",
              }}>
              {inputContent[titleIndex]}
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="featherBox">
          <img
            className="feather"
            alt="banner"
            src="img/feather.png"
            onClick={() => {
              setFeatherCnt(featherCnt + 1);
            }}
          />
          {featherCnt}
        </div>
      </div>
    </div>
  );
}

export default Daily;
