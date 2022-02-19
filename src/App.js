import "./Style.css";
import Navbar from "./Components/Navbar/Navbar";
import { Sidebar, SidebarItem } from "react-responsive-sidebar";

function App() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <Sidebar
        background="#1e293a"
        breakPoint="768"
        content={[<SidebarItem>Sidebar</SidebarItem>]}
      ></Sidebar>
    </div>
  );
}

export default App;
