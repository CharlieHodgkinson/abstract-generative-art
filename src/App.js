// import sketch from "./sketches/sketch";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Sketch from "react-p5";
import { setup, preload, updateValues } from "./sketches/lineSketch";
import { Slider, Switch } from "@mui/material";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });
  const [value, setValue] = React.useState([-10, 50]);

  const handleChange = (event, newValue) => {
    console.log(event);
    updateValues({ new_minYChange: newValue[0], new_maxYchange: newValue[1] });
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <div
        className="app"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "99vh",
          backgroundColor: "#e9ecef",
          fontFamily: "Roboto",
          gap: "50px",
        }}
      >
        <div
          style={{
            width: "20%",
            display: "flex",
            height: window.innerHeight * 0.8,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "45px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "100%",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            }}
          >
            <h1
              style={{
                fontSize: 56,
                margin: "0",
                textAlign: 'center'
              }}
            >
              Generate Your Art
            </h1>
            <p style={{fontSize: '20px'}}>Click your art to regenerate</p>

            <p style={{ margin: "0" }}>Number of layers</p>
            <Slider
              min={1}
              max={10}
              valueLabelDisplay="auto"
              onChange={(event) => {
                updateValues({ new_layers: event.target.value });
              }}
            />
            <p style={{ margin: "0" }}>Rotation of lines</p>
            <Slider
              min={0}
              max={100}
              valueLabelDisplay="auto"
              onChange={(event) => {
                updateValues({ new_rotStripe: event.target.value });
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ margin: "0" }}>Outlines</p>
              <Switch
                defaultChecked
                onChange={(event) => {
                  updateValues({ new_outlines: event.target.checked });
                }}
              />
            </div>
            <p style={{ margin: "0" }}>Line opacity</p>
            <Slider
              min={0}
              max={255}
              defaultValue={255}
              valueLabelDisplay="auto"
              onChange={(event) => {
                updateValues({ new_alpha: event.target.value });
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ margin: "0" }}>Line fill</p>
              <Switch
                defaultChecked
                onChange={(event) => {
                  updateValues({ new_filling: event.target.checked });
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ margin: "0" }}>Random colors</p>
              <Switch
                onChange={(event) => {
                  updateValues({ new_randomColors: event.target.checked });
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ margin: "0" }}>Outline coloured</p>
              <Switch
                onChange={(event) => {
                  updateValues({ new_outlineColoured: event.target.checked });
                }}
              />
            </div>
            <p style={{ margin: "0" }}>Outline thickness</p>
            <Slider
              min={1}
              max={15}
              defaultValue={1}
              valueLabelDisplay="auto"
              onChange={(event) => {
                updateValues({ new_outlineWidth: event.target.value });
              }}
            />
            <p style={{ margin: "0" }}>Outline opacity</p>
            <Slider
              min={0}
              max={255}
              defaultValue={255}
              valueLabelDisplay="auto"
              onChange={(event) => {
                updateValues({ new_outlineAlpha: event.target.value });
              }}
            />
            <p style={{ margin: "0" }}>Line overlap</p>
            <Slider
              min={-50}
              max={50}
              value={value}
              disableSwap
              valueLabelDisplay="auto"
              onChange={handleChange}
            />
          </div>
        </div>
        <div
          style={{
            border: "solid black 3px",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          }}
        >
          <Sketch
            setup={setup}
            preload={preload}
            style={{
              height: window.innerHeight * 0.8,
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
