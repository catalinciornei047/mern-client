import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeleteStud from "./pages/DeleteStud";
import ShowStud from "./pages/ShowStud";
import EditStud from "./pages/EditStud";
import CreateStud from "./pages/CreateStud";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stud/create" element={<CreateStud />} />
      <Route path="/stud/details/:id" element={<ShowStud />} />
      <Route path="/stud/edit/:id" element={<EditStud />} />
      <Route path="/stud/delete/:id" element={<DeleteStud />} />
    </Routes>
  );
};

export default App;
