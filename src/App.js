import React from "react";
import {Routes, Route } from "react-router-dom";
import Front from "./Front";
import Front2 from "./Front2";
import Resume1 from "./Resume1";

function App() {
  return (
 
      <Routes>
        {/* First Page */}
        <Route path="/" element={<Front />} />

        {/* Second Page */}
        <Route path="/front2" element={<Front2 />} />

        <Route path="/resume1" element={<Resume1 />} />

      </Routes>
    
  );
}

export default App;


