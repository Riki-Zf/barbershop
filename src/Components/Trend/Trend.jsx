import React from "react";
import "./Trend.css";

const Trend = () => {
  return (
    <div className="trend">
      <div className="video-right">
        <iframe src="https://www.youtube.com/embed/O00DUwfgq5o?si=An_0_1erGHAKKHWg" frameborder="0" width="500" height="250"></iframe>
      </div>
      <div className="video-left">
        <iframe src="https://www.youtube.com/embed/IUWAM-r--uU?si=XAz-qfaUAHDdVV7p" frameborder="0" width="500" height="250"></iframe>
      </div>
    </div>
  );
};

export default Trend;
