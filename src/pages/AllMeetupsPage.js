import MeetupList from "../components/meetups/MeetupList";
import { useSelector } from "react-redux";
export default function AllMeetupsPage() {
  const { data } = useSelector((state) => {
    return state.meetups;
  });

  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      {data?.length <= 0 ? (
        <>
          <p>you don't have meetups</p>
        </>
      ) : (
        <MeetupList data={data} />
      )}
    </section>
  );
}
