import React from "react";
import allVideosData from "../../Assets/AllVideosData";
import "./Home.css";

const Home = ({ setPlayVideo }) => {
  const handleVideoClick = (e) => {
    setPlayVideo(e.target.id);
  };

  return (
    <>
      <div className="container-fluid video-card-hover mx-auto bg-dark text-light text-center py-5 ">
        <h1 className="py-2">Video-Player</h1>
        {allVideosData.map((video, idx) => (
          <div
            className="p-2 w-75 mx-auto my-2 py-2 video-card-hover"
            onClick={handleVideoClick}
            key={idx}
          >
            <img
              className="img-responsive my-1 w-100"
              src={video.image}
              alt={video.name}
              id={video.video_url}
            />
            <h2>{video.name}</h2>
            <h4>{video.description}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
