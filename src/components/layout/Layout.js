import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
}
