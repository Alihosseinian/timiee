import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ListPage from "./routes/ListPage";
import TablePage from "./routes/TablePage";
import Loginpage from "./routes/LoginPage";

import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Loginpage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/table" element={<TablePage />} />
    </Routes>
  </Router>
);
export default App;
