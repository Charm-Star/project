import Card from "react-bootstrap/Card";

function Daily() {
  return (
    <div style={{width: "100%", height: "100%", backgroundColor: "lightgrey"}}>
      <div style={{padding: "30px", margin: "0 auto"}}>
        <Card style={{width: "100%", height: "100vh"}}>
          <Card.Body style={{width: "100%", height: "100vh"}}>
            <Card.Title>오늘의 느낌</Card.Title>
            <Card.Subtitle
              style={{marginTop: "50px"}}
              className="mb-2 text-muted">
              작성일 2022.09.20
            </Card.Subtitle>
            <Card.Text style={{margin: "50px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing e이것은 ㅇ스터
              에그 입니다 Consectetur dolorem ratione, rerum error soluta
              provident possimus quisquam corrupti, molestiae veritatis repellat
              architecto repellendus! Neque, unde eos officiis voluptatibus
              earum nemo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consectetur dolorem ratione, rerum error soluta provident
              possimus quisquam corrupti, molestiae veritatis repellat
              architecto repellendus! Neque, unde eos officiis voluptatibus
              earum nemo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consectetur dolorem ratione, rerum error soluta provident
              possimus quisquam corrupti, molestiae veritatis repellat
              architecto repellendus! Neque, unde eos officiis voluptatibus
              earum nemo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consectetur dolorem ratione, rerum error soluta provident
              possimus quisquam corrupti, molestiae veritatis repellat
              architecto repellendus! Neque, unde eos officiis voluptatibus
              earum nemo. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consectetur dolorem ratione, rerum error soluta provident
              possimus quisquam corrupti, molestiae veritatis repellat
              architecto repellendus! Neque, unde eos officiis voluptatibus
              earum nemo.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Daily;
