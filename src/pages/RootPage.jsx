import { Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
