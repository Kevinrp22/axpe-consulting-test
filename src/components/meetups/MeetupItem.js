import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  createFavorite,
  deleteFavorite,
} from "../../store/slices/favoriteSlice";

export default function MeetupItem({ item = {} }) {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => {
    return state;
  });
  const isFav = favorites.data.some((fav) => fav.id === item.id);
  const addFavorite = (item) => {
    dispatch(createFavorite(item));
  };

  const removeFavorite = (itemId) => {
    dispatch(deleteFavorite(itemId));
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          {isFav ? (
            <button onClick={() => removeFavorite(item.id)}>
              Remove from favorites
            </button>
          ) : (
            <button onClick={() => addFavorite(item)}>Add to favorites</button>
          )}
        </div>
      </Card>
    </li>
  );
}
