import React, { Component } from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import { AiFillDashboard } from "react-icons/ai";
import Logo from "../Logo/Logo";
import "./Sidbar.css";

function Sidbar() {
  const items = [
    <SidebarItem hoverHighlight="1e293a">
      <Logo></Logo>
      <p style={{ opacity: 0.5, fontFamily: "cursive" }}>Verto #ThinkBig</p>
    </SidebarItem>,
    <SidebarItem leftIcon={<AiFillDashboard />}>Dashboard</SidebarItem>,
    <SidebarItem>Profile</SidebarItem>,
    <SidebarItem>Settings</SidebarItem>,
  ];
  return (
    <div className="sidebar">
      <Sidebar
        width={255}
        background="#1e293a"
        breakPoint="768"
        content={items}
      ></Sidebar>
    </div>
  );
}
export default Sidbar;
