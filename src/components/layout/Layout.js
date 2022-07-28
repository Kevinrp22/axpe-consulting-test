import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMeetups } from "../../store/actions/meetupActions";
import { getFavorites } from "../../store/actions/favoriteActions";
export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
    dispatch(getMeetups());
  }, [dispatch]);

  return (
    <div data-test="app">
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}
