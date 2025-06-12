import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "./RootLayout.css";
import Background from "../components/Background/Background";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <Background />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
