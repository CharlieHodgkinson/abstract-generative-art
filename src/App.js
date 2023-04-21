// import sketch from "./sketches/sketch";
import React, { useEffect, useRef } from "react";
import Sketch from "react-p5";
import { setup, preload, updateValues } from "./sketches/lineSketch";
import Button from "@mui/material/Button";
import { Card, Grid, Slider } from "@mui/material";

const App = () => {
  return (
    // 
    <div className="app" style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100vw',
      height: '99vh',
      backgroundColor: '#e9ecef'
      }} >
      <div style={{
        width: '20%',
        backgroundColor: '#fff',
        padding: '40px 60px',
      }}>
        {/* <div>hiiiiiiii</div> */}
      {/* <Card> */}
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      {/* </Card> */}
      </div>
      <div>
        {/* <div>HELOOOOOO</div> */}
      <Sketch setup={setup} preload={preload} />
      </div>
    </div>
  );
};

export default App;
