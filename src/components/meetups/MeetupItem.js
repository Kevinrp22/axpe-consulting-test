import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useSelector, useDispatch } from "react-redux";
import {
  createFavorite,
  deleteFavorite,
} from "../../store/slices/favoriteSlice";
import { deleteMeetup } from "../../store/actions/meetupActions";
import { useNavigate } from "react-router-dom";

export default function MeetupItem({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favorites } = useSelector((state) => {
    return state;
  });
  const isFav = favorites.data?.some((fav) => fav.id === item.id);
  const addFavorite = (item) => {
    dispatch(createFavorite(item));
  };

  const removeFavorite = (itemId) => {
    dispatch(deleteFavorite(itemId));
  };

  const editMeetup = (itemId) => {
    navigate(`/update-meetup/${itemId}`);
  };

  const removeMeetup = (itemId) => {
    if (window.confirm("Warning: You meetup will be deleted")) {
      dispatch(deleteMeetup(itemId));
    }
  };

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.buttons}>
          <button
            onClick={() => {
              editMeetup(item?.id);
            }}
            className={classes.editButton}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/1024px-Edit_icon_%28the_Noun_Project_30184%29.svg.png"
              alt="deleteMeetup"
            />
          </button>
          <button
            onClick={() => {
              removeMeetup(item?.id);
            }}
            className={classes.deleteButton}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cross_icon_%28white%29.svg/1024px-Cross_icon_%28white%29.svg.png"
              alt="deleteMeetup"
            />
          </button>
        </div>
        <div className={classes.image}>
          <img src={item?.image} alt={item?.title} />
        </div>
        <div className={classes.content}>
          <h3>{item?.title}</h3>
          <address>{item?.address}</address>
          <p>{item?.description}</p>
        </div>
        <div className={classes.actions}>
          {isFav ? (
            <button onClick={() => removeFavorite(item?.id)}>
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
