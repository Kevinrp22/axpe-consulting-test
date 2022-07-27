import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export default function MeetupList({ data }) {
  return (
    <ul className={classes.list}>
      {data.map((item) => (
        <MeetupItem item={item} key={item.id} />
      ))}
    </ul>
  );
}
