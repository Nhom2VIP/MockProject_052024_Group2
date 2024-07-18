import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function RootPage() {
  return (
    <div>
      <div>
        <Navbar/>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
}
