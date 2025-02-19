import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostAdd() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("none");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const changeCategory = (e) => setCategory(e.target.value);
  const changeTitle = (e) => setTitle(e.target.value);
  const changeBody = (e) => setBody(e.target.value);

  const addPost = async (e) => {
    e.preventDefault();

    const postData = {
      category: category,
      title: title,
      body: body,
      date: new Date().toLocaleDateString(),
    };

    if (category === "none" || title === "" || body === "") {
      alert("카테고리, 제목, 본문을 입력해주세요.");
    } else {
      await axios
        .post("http://localhost:5000/post/add", postData)
        .then((res) => {
          alert(res.data.message);
          navigate("/");
        });
    }
  };

  return (
    <div className="postForm">
      <button className="preBtn" onClick={() => navigate("/")}>
        이전
      </button>
      <h1>글쓰기</h1>
      <form onSubmit={addPost}>
        <div>
          <label>카테고리</label>
          <select value={category} onChange={changeCategory}>
            <option value="none">--------</option>
            <option value="일상">일상</option>
            <option value="게임">게임</option>
            <option value="공부">공부</option>
            <option value="여행">여행</option>
          </select>
        </div>
        <div>
          <label>제목</label>
          <input type="text" value={title} onChange={changeTitle} />
        </div>
        <div>
          <label>본문</label>
          <textarea value={body} onChange={changeBody} />
        </div>
        <button className="submitBtn" type="submit">
          등록
        </button>
      </form>
    </div>
  );
}

export default PostAdd;
