import { useDispatch, useSelector } from "react-redux";
import { updateMeetup } from "../../store/actions/meetupActions";
import MeetupForm from "./MeetupForm";

export default function UpdateMeetupForm({ item }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => {
    return state.meetups;
  });
  function submitHandler(event) {
    event.preventDefault();
    const form = event.target;
    const formData = {
      title: form.title.value,
      image: form.image.value,
      address: form.address.value,
      description: form.description.value,
    };
    dispatch(updateMeetup({ id: item.id, formData }))
      .unwrap()
      .then(() => {
        alert("Meetup has updated");
      })
      .catch(() => alert("Something wrong!"));
  }
  return (
    <MeetupForm
      submitHandler={submitHandler}
      loading={loading}
      defaultValues={item}
    />
  );
}
