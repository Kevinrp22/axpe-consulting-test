import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { convertRemToPixels } from "../../utils/utils";

export default function MainNavigation() {
  const { data } = useSelector((state) => state.favorites);
  const [scrollY, setScrollY] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const currentY = e.currentTarget.pageYOffset;
      const header = document.querySelector("header");
      setScrollY((prev) => {
        if (prev !== currentY) {
          if (prev > currentY || window.scrollY < convertRemToPixels(5)) {
            header.style.top = "0rem";
          } else {
            header.style.top = "-5rem";
          }
        }
        return currentY;
      });
    });
  }, [scrollY]);

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
