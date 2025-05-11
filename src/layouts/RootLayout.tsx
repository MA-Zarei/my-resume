import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <div className="template">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
