import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryMenu({ postList, setCategoryMenu, setPageNum }) {
  const navigate = useNavigate();

  const allPost = () => {
    setCategoryMenu(postList);
    setPageNum(1);
  };
  const dailyPost = () => {
    setCategoryMenu(postList.filter((post) => post.category === "일상"));
    setPageNum(1);
  };
  const gamePost = () => {
    setCategoryMenu(postList.filter((post) => post.category === "게임"));
    setPageNum(1);
  };
  const studyPost = () => {
    setCategoryMenu(postList.filter((post) => post.category === "공부"));
    setPageNum(1);
  };
  const travelPost = () => {
    setCategoryMenu(postList.filter((post) => post.category === "여행"));
    setPageNum(1);
  };

  return (
    <div className="btnList">
      <button onClick={allPost}>전체</button>
      <button onClick={dailyPost}>일상</button>
      <button onClick={gamePost}>게임</button>
      <button onClick={studyPost}>공부</button>
      <button onClick={travelPost}>여행</button>
    </div>
  );
}

export default CategoryMenu;
