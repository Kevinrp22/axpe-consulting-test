import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetupPage";
import UpdateMeetupPage from "./pages/UpdateMeetupPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
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
