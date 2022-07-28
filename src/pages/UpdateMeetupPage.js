import { useSelector } from "react-redux";
import UpdateMeetup from "../components/meetups/UpdateMeetupForm";
import { useParams } from "react-router-dom";
export default function NewMeetupsPage() {
  const { data } = useSelector((state) => state.meetups);
  const { id } = useParams();
  const itemToUpdate = data?.find((item) => item.id === id);
  return (
    <section>
      <h1>Update Meetup</h1>
      <UpdateMeetup item={itemToUpdate} />
    </section>
  );
}
