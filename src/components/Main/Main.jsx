import React from "react";
import './Main.scss'
import videobg from "../../videos/5122811-hd_1920_1080_30fps.mp4";
const Main = () => {
  return (
    <div className="video-container">
      <video
        className="video-bg"
        src={videobg}
        type="video/mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Main;
