import { useDispatch, useSelector } from "react-redux";
import { createMeetup } from "../../store/actions/meetupActions";
import { useNavigate } from "react-router-dom";
import MeetupForm from "./MeetupForm";

export default function NewMeetupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(createMeetup(formData))
      .unwrap()
      .then(() => {
        alert("Meetup has created");
        navigate(`/`);
      })
      .catch(() => alert("Something wrong!"));
  }

  return <MeetupForm submitHandler={submitHandler} loading={loading} />;
}
