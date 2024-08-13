import React, { useState } from "react";
import { Layout } from "antd";
import Pricing from "./components/Pricing.jsx"
import Navbar from './components/Navbar.jsx'
import "./App.css";

const { Content } = Layout;

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Layout className={`app ${theme}`}>
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <Content className="content">
        <Pricing />
      </Content>
    </Layout>
  );
}

export default App;

