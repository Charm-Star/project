import Daily from "./Daily";
import "./App.css";
import None from "./None";

function Story({inputTitle, inputContent}) {
  const rendering = () => {
    const result = [];
    for (let i = inputTitle.length - 1; i >= 0; i--) {
      result.push(
        <Daily
          key={i}
          inputTitle={inputTitle[i]}
          titleIndex={i}
          inputContent={inputContent}></Daily>
      );
    }
    return result;
  };
  console.log(inputContent[0]);
  return (
    <div className="container">
      <div className="c1image">
        <img
          className="banner"
          alt="banner"
          src={process.env.PUBLIC_URL + "/img/sunset.jpg"}
        />
        <div>{inputContent[0] === undefined ? <None></None> : rendering()}</div>
        {/* <div> {rendering()}</div> */}
        {/* {inputTitle.map((data, i) => {
          return (
            <Daily
              key={`${i}`}
              inputTitle={data}
              titleIndex={i}
              inputContent={inputContent}></Daily>
          );
        })} */}
      </div>
    </div>
  );
}

export default Story;
