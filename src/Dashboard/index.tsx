// import npm libs
import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
// import local libs
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
// import styles
import "./Dashboard.scss";

interface Props {
  children: JSX.Element;
}

export interface BarContext {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarVisible = createContext<BarContext>({
  value: false,
  setValue: useState,
});

export const ToolbarVisible = createContext<BarContext>({
  value: false,
  setValue: useState,
});

const Dashboard = (props: Props) => {
  const [toolbarVisible, setToolbarVisible] = useState<boolean>(true);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
 
  return (
    <div className="root">
      <BrowserRouter>
        <ToolbarVisible.Provider value={{value: toolbarVisible, setValue: setToolbarVisible}}>
          <SidebarVisible.Provider value={{value: sidebarVisible, setValue: setSidebarVisible}}>
            {sidebarVisible? <Sidebar /> : null}
            <main>
              <Routes>
                <Route path="/" element={props.children} />
              </Routes>
            </main>
            {toolbarVisible? <Toolbar/> : null}
          </SidebarVisible.Provider>
        </ToolbarVisible.Provider>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
