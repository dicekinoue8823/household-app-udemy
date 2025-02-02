// import React from "react";

import '@/App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Report from "@/pages/Report";
import NoMatch from "@/pages/NoMatch";

function App()  {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
    );
}

export default App