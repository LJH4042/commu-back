import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./page/PostList";
import PostAdd from "./page/PostAdd";
import PostDetail from "./page/PostDetail";
import PostUpdate from "./page/PostUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<PostList />} />
          <Route path="/post/add" element={<PostAdd />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/post/:id/update" element={<PostUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
