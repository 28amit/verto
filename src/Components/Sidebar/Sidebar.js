import React from "react";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import { AiFillDashboard } from "react-icons/ai";
import {
  BsBookHalf,
  BsFillPenFill,
  BsHandIndexThumbFill,
  BsFillLightbulbFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaBookReader, FaBlogger } from "react-icons/fa";

import Logo from "../Logo/Logo";
import "./Sidbar.css";

function Sidbar() {
  const items = [
    <SidebarItem hoverHighlight="1e293a">
      <Logo></Logo>
      <p style={{ opacity: 0.5, fontFamily: "cursive" }}>Verto #ThinkBig</p>
    </SidebarItem>,
    <SidebarItem leftIcon={<AiFillDashboard />}>Dashboard</SidebarItem>,
    <SidebarItem leftIcon={<BsBookHalf></BsBookHalf>}>Experience</SidebarItem>,
    <SidebarItem leftIcon={<BsFillPenFill></BsFillPenFill>}>
      Write Article
    </SidebarItem>,
    <SidebarItem leftIcon={<BsHandIndexThumbFill></BsHandIndexThumbFill>}>
      Request Article
    </SidebarItem>,
    <SidebarItem leftIcon={<FaBookReader></FaBookReader>}>
      Resources
    </SidebarItem>,
    <SidebarItem leftIcon={<FaBlogger></FaBlogger>}>Blog</SidebarItem>,
    <SidebarItem leftIcon={<BsFillLightbulbFill></BsFillLightbulbFill>}>
      FAQ
    </SidebarItem>,
    <SidebarItem leftIcon={<CgProfile></CgProfile>}>About Us</SidebarItem>,
  ];
  return (
    <div className="sidebar">
      <Sidebar
        width={240}
        background="#2f44ae"
        breakPoint="768"
        content={items}
      ></Sidebar>
    </div>
  );
}
export default Sidbar;
