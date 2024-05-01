import Header from "./Header";
import { Outlet } from "react-router-dom";

const Asol = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Asol;
