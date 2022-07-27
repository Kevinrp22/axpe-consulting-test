export const getAllMeetups = async () => {
  const res = await fetch(`${URL}/meetups`);
  return res.json();
};
