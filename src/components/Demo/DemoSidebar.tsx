// LeftSidebar.tsx

import React from "react";
import "./demoSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCut, faFaceSmileBeam, faPlus, faSquareMinus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const DemoSidebar: React.FC = () => {
  return (
    <div className="">
      <div className="box">
        <div className="hover">
          <h5>Hover & Click</h5>
        </div>
        <div className="text">
          <p>Click an object one or more times.</p>
          <p> Shift-click to remove regions.</p>
          <div className="icons">
            <FontAwesomeIcon className="icon-plus" icon={faSquarePlus} />
            <p className="plus-text">Add Mask</p>
            <FontAwesomeIcon className="icon-neg" icon={faSquareMinus} />
            <p className="minus-text">Remove Mask</p>
          </div>
          <div className="button-container">
            <button className="button">Reset</button>
            <button className="button">Undo</button>
            <button className="button disabled">Redo</button>
          </div>
          <div className="button-container">
            <button className="button2">
              <FontAwesomeIcon icon={faCut} className="icon" />
              Cut out object
              
            </button>
          </div>
          <div className="button-container">
            <button className="cut-button">
              <FontAwesomeIcon className="cut-icon" icon={faFaceSmileBeam} />
              Show Cut-Outs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSidebar;
