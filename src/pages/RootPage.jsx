import { Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <div>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
}
