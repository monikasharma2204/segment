// LeftSidebar.tsx

import React from "react";
import "./demo.css"; // Import your custom or external CSS file for styling
import DemoLayout from "./DemoLayout";
import DemoSidebar from "./DemoSidebar";

const Demo: React.FC = () => {
  return (
    <div className="demo-section">
      <div className="demo-left-sidebar">
        <DemoSidebar />
      </div>
      <div className="demo-layout">
        <DemoLayout />
      </div>
    </div>
  );
};

export default Demo;
