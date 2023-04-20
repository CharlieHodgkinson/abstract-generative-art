// import sketch from "./sketches/sketch";
import React, { useEffect, useRef } from "react";
import Sketch from "react-p5";
import { setup, preload } from "./sketches/lineSketch";
import style from "./style.css";

const App = () => {

  return (
    <div className="app" css={{ width: "100%", height: "100%" }}>
      <Sketch
        css={{ width: "100vw", height: "100vh" }}
        setup={setup}
        preload={preload}
      />
    </div>
  );
};

export default App;
