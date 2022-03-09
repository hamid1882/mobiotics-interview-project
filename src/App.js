import React, { useState } from "react";
import ShakaPlayerContainer from "./Components/ShakaPlayer/ShakaPlayerContainer";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  const [playVideo, setPlayVideo] = useState("");

  return (
    <>
      <Home setPlayVideo={setPlayVideo} />
      <ShakaPlayerContainer playVideo={playVideo} setPlayVideo={setPlayVideo} />
    </>
  );
}

export default App;
