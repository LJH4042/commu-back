import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/comunity.css";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../component/Pagination";
import CategoryMenu from "./CategoryMenu";

function PostList() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [postList, setPostList] = useState([]);
  const [categoryMenu, setCategoryMenu] = useState(postList);

  const [pageNum, setPageNum] = useState(1);
  const onePageElement = 5;
  const firstPost = (pageNum - 1) * onePageElement;
  const lastPost = firstPost + onePageElement;
  const slicePost = categoryMenu.slice(firstPost, lastPost);

  const deletePost = async () => {
    await axios.delete(`http://localhost:5000/post/${id}`).then((res) => {
      alert(res.data.message);
      navigate("/");
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/post")
      .then((res) => setPostList(res.data.reverse()));
  }, []);

  useEffect(() => {
    setCategoryMenu(postList);
  }, [postList]);

  return (
    <div className="postList">
      <div className="postTable">
        <button className="addBtn" onClick={() => navigate("/post/add")}>
          + 글쓰기
        </button>
        <CategoryMenu
          postList={postList}
          setCategoryMenu={setCategoryMenu}
          setPageNum={setPageNum}
        />
        <table>
          <thead>
            <tr>
              <td>분류</td>
              <td>제목</td>
              <td>작성 날짜</td>
            </tr>
          </thead>
          <tbody>
            {slicePost.map((post, index) => {
              return (
                <tr key={index}>
                  <td>{post.category}</td>
                  <td>
                    <span onClick={() => navigate(`/post/${post._id}`)}>
                      {post.title}
                    </span>
                  </td>
                  <td>{post.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          totalElement={categoryMenu.length}
          onePageElement={onePageElement}
          pageNum={pageNum}
          setPageNum={setPageNum}
        />
      </div>
    </div>
  );
}

export default PostList;
