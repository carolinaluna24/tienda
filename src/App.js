import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Tooltip, TooltipComponent} from "@syncfusion/ej2-react-popups";


import "./App.css";
export const App = () => {

  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content="settings" position="Top">
            <button 
            type="button" className="text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white"
            style={{background: 'purple', borderRadius: '100%'}}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
      </div>
    </BrowserRouter>
  );
};
  