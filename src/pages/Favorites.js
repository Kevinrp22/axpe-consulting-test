import { useSelector } from "react-redux";
import MeetupList from "../components/meetups/MeetupList";
export default function FavoritesPage() {
  const { data } = useSelector((state) => {
    return state.favorites;
  });
  if (!data) return <p>Loading...</p>;
  return (
    <section>
      <h1>My Favorites</h1>
      {data?.length <= 0 ? (
        <p>you don't have favorites yet</p>
      ) : (
        <MeetupList data={data} />
      )}
    </section>
  );
}
