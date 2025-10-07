import React from "react";
import { useNavigate } from "react-router-dom";
import "./Front.css";

const Front = () => {
  const navigate = useNavigate();

  return (
    <><><div className="app-container">

      {/* Portfolio Title */}
      <div className="portfolio-wrapper">
        <div className="portfolio-title">
          <img src="/Component1.png" alt="text" className="text" />
          <span className="stretch-o">O</span>
        </div>
      </div>


      {/* Stamps */}
      <img src="/stamp1.png" alt="Stamp 1" className="stamp-1" />
      <img src="/stamp2.png" alt="Stamp 2" className="stamp-2" />

      {/* Clipped Photo with Binder */}
      <div className="clipped-photo">
        <img src="/clippedPhoto.png" alt="Clipped" />
      </div>

      {/* Button Section */}
      <div>
        <img src="/button.png" alt="button" className="button" />
        <button className="know" onClick={() => navigate("/front2")}>
          Know me more !
        </button>
      </div>

      {/* Folder */}
      <div className="folder-wrapper">
        <img src="/Component2.png" alt="Folder" className="folder-img" />
        <h2 className="folder-label">My Recap</h2>

        {/* Tabs */}
        <div className="folder-tabs">
          {/* Add tab content here */}
        </div>
      </div>
    </div></>

    <footer>
          <h2>Made with love and art ❤︎</h2>
    </footer>
    </>
    
    
  );
};

export default Front;
