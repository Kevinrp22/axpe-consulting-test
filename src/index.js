import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetupPage";
import UpdateMeetupPage from "./pages/UpdateMeetupPage";

import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllMeetupsPage />} />
          <Route path="/add-new-meetup" element={<NewMeetupsPage />} />
          <Route path="/update-meetup/:id" element={<UpdateMeetupPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);
