import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMeetups } from "./store/actions/meetupActions";
import { getFavorites } from "./store/actions/favoriteActions";
import Layout from "./components/layout/Layout";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
    dispatch(getMeetups());
  }, [dispatch]);

  return (
    <div data-test="app">
      <Layout />
    </div>
  );
}
export default App;
