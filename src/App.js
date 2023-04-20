// import sketch from "./sketches/sketch";
import React from "react";
import Sketch from "react-p5";
import { setup, preload } from "./sketches/lineSketch";
import style from "./style.css";

const App = () => {
  // const elementRef = useRef(null);
  return (
    <div className="app" css={{ width: "100%", height: "100%" }}>
      <Sketch setup={setup} preload={preload} />
    </div>
  );
};

export default App;
