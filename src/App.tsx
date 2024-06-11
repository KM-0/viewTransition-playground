import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PostDetail from "./pages/PostDetail";
import Page2 from "./pages/Page2";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
