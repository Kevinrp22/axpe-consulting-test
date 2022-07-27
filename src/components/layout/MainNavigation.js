import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";

export default function MainNavigation() {
  const { data } = useSelector((state) => state.favorites);

  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/add-new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{data?.length || 0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
