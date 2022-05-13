import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Post } from "./pages/post/post";
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
