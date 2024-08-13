import React from "react";
import { Switch, Layout, Menu } from "antd";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = ({ onToggleTheme, theme }) => {
  return (
    <Header className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="logo">TryBookAI</div>
        <Menu
          theme={theme === "light" ? "light" : "dark"}
          mode="horizontal"
          style={{ lineHeight: "64px", flex: 1 }}
        >
        </Menu>
        <Switch
          checkedChildren={<BulbFilled />}
          unCheckedChildren={<BulbOutlined />}
          onChange={onToggleTheme}
          className={`theme-switch ${theme}`}
        />
      </div>
    </Header>
  );
};

export default Navbar;
