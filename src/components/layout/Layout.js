import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllFavorites } from "../../store/slices/favoriteSlice";
import { fetchAllMeetups } from "../../store/slices/MeetupsSlice";
export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllFavorites());
    dispatch(fetchAllMeetups());
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
