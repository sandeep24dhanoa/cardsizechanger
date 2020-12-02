import logo from "./logo.svg";
import "./App.css";
import { Input, Slider } from "antd";
import React, { useState } from "react";

function App() {
  const [size, setSize] = useState(10);
  const [radius, setRadius] = useState();

  return (
    <div className="App">
      <div className="p-4 justify-between items-center width-58">
        <Slider className="w-40" min={200} max={300} onChange={setSize} />
        <Slider className="w-40 " min={30} max={100} onChange={setRadius} />
      </div>

      <div
        style={{
          height: size,
          width: size,
          borderRadius: radius,
        }}
        className="py-8 bg-gray-800 text-center m-10 text-white text-lg"
      >
        Hello
      </div>

      <div
        placeholder="Hello"
        style={{ height: 100, width: size, borderRadius: radius }}
        className="py-8 bg-gray-800 text-center m-10 text-white text-lg"
      >
        <span className="">Sandeep</span>
      </div>
    </div>
  );
}

export default App;
