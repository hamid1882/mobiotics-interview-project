import React, { useRef, useEffect } from "react";
import ShakaPlayer from "shaka-player-react";
import "../../../node_modules/shaka-player/dist/controls.css";
import "./ShakaPlayer.css";

const ShakaPlayerContainer = ({ playVideo, setPlayVideo }) => {
  const playerRef = useRef();

  useEffect(() => {
    const { player, videoElement } = playerRef.current;

    async function loadAsset() {
      await player.load(playVideo);

      videoElement.play();
    }

    loadAsset();
  }, [playVideo]);

  return (
    <div
      className={`container player-background w-100 h-100  ${
        playVideo !== "" ? "d-block" : "d-none"
      }`}
    >
      <ShakaPlayer
        ref={playerRef}
        className="container h-100 w-100 rounded player-container"
      />
      <button className="btn exit-btn" onClick={() => setPlayVideo("")}>
        <img
          src="https://img.icons8.com/emoji/48/000000/multiply-emoji.png"
          alt="exit"
        />
      </button>
    </div>
  );
};

export default ShakaPlayerContainer;
