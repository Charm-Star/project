import bgVideo from "./media/back.mp4";

function BackMovie() {
  return (
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
          height: "50%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}>
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default BackMovie;
