import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/shared/Header";

import Home from "./pages/home";
import JobDetail from "./pages/detail";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
