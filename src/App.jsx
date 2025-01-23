import NewsFeed from "./components/newsfeed/NewsFeed";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/scrolltop/ScrollTop";
import Guides from "./components/guides/Guides";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <ScrollTop />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news/:slug" element={<NewsFeed />} />
              <Route path="/guides" element={<Guides />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
