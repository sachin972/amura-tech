import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TemplatePage from "./pages/si-template-page";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/digital-strategy" element={<TemplatePage title={"Digital Strategy"} subtitle={"Another Strategy"} backgroundImage={"https://www.amuratech.com/uploads/blog_post/thumbnail/154/Banners-02.jpg"} features={[{title: "Strategy", }]} />} />
            </Routes>
        </Router>
    );
};

export default App;
