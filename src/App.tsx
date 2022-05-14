import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notfound } from "./pages/404/404";
import { Home } from "./pages/home/home";
import { Post } from "./pages/post/post";
import { About } from "./pages/about/about";
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
