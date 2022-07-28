import Card from "../ui/Card";
import classes from "./MeetupForm.module.css";

export default function MeetupForm({ submitHandler, loading, defaultValues }) {
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            name="title"
            id="title"
            defaultValue={defaultValues?.title}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            name="image"
            id="image"
            defaultValue={defaultValues?.image}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            name="address"
            id="address"
            defaultValue={defaultValues?.address}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            required
            rows="5"
            defaultValue={defaultValues?.description}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit" disabled={loading}>
            {loading ? (
              <img
                width={18}
                height={18}
                src="https://c.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif"
                alt="loading"
              />
            ) : defaultValues ? (
              "Edit Meetup"
            ) : (
              "Add Meetup"
            )}
          </button>
        </div>
      </form>
    </Card>
  );
}
