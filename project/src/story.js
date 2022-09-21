import Daily from "./Daily";
import "./App.css";
function Story({inputTitle, inputContent}) {
  return (
    <div className="container">
      <div className="c1image">
        <img className="banner" alt="banner" src="img/sunset.jpg" />

        {inputTitle.map((data, i) => {
          return (
            <Daily
              key={`${i}`}
              inputTitle={data}
              titleIndex={i}
              inputContent={inputContent}></Daily>
          );
        })}
      </div>
    </div>
  );
}

export default Story;
