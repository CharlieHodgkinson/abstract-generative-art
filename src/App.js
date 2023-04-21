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
          display: 'flex',
          height: window.innerHeight*0.7,
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
        <h1 style={{fontSize: 80}}>Generate Your Art</h1>
        <div style={{
          backgroundColor: '#fff',
          padding: '40px 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100%',
        }}>
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
        </div>
      </div>
      <div style={{border: '8px solid'}}>
        <Sketch setup={setup} preload={preload} style={{ 
          height: window.innerHeight*0.7,
        }} />
      </div>
    </div>
  );
};

export default App;
