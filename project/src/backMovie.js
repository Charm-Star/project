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
        <source
          src={process.env.PUBLIC_URL + "/img/back.mp4"}
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default BackMovie;
