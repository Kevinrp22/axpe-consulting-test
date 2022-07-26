import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllMeetupsPage />} />
        <Route path="/add-new-meetup" element={<NewMeetupsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<p>Not found!</p>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
