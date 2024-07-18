import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function RootPage() {
  return (
    <div>
      <div>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
}
