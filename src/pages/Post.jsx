import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Post.module.css";
import ValueDisplay from "../components/ValueDisplay";

 function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [postTitle, setPostTitle] = useState(""); // заголовок поста
  const [postContent, setPostContent] = useState(""); // контент для id !== 0
  const [loading, setLoading] = useState(false);


  /*const posts = {
    0: "Этот блог создан как площадка для демонстрации моих навыков работы с элементами интерфейса, маршрутизацией и структурой приложения.\n\nThis blog was created as a platform to showcase my skills in working with interface elements, routing, and application structure.",
    1: "Contents of the first post...",
    2: "Contents of the second post...",
    3: "Contents of the third post...",
  };

  const content = posts[id] || "Post not found.";
/*const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);*/

  const API_URL = "https://6890e3a6944bf437b597aa06.mockapi.io/api/v1/posts";

  useEffect(() => {
    if (id === "0") {
       setLoading(false); // статический пост не нужно загружать
    } else {
      setLoading(true); // начинаем загрузку для динамического поста
      fetch(`${API_URL}/${id}`)
        .then((res) => res.json())
        .then((data) => {
           setPostTitle(data.title || `Post ${id}`);
          setPostContent(data.content || "");
          setLoading(false);
        })
        .catch(() => {
          setPostTitle("Post not found");
          setPostContent("");
          setLoading(false);
        });
    }
    }, [id]);

  return (
    <div className={styles.post}>
      {/* Статический контент для id === 0 */}
      {id === "0" ? (
        <>
          <h1>MyPost</h1>
          <p style={{ whiteSpace: "pre-line" }}>
            Этот блог создан как площадка для демонстрации моих навыков работы с элементами интерфейса, маршрутизацией и структурой приложения.
            {'\n\n'}
            This blog was created as a platform to showcase my skills in working with interface elements, routing, and application structure.
            {'\n\n'}
            Здесь вы сможете увидеть примеры кода, оформление страниц, работу с API и многое другое.
            {'\n\n'}
            Each post is a small experiment in which I demonstrate how to use different technologies to create modern web applications.
          </p>

          {/*  блок с вводом и ValueDisplay */}
          <div style={{ marginTop: "20px" }}>
            <label>
              Enter something:{" "}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введите что-нибудь..."
              />
            </label>
            <ValueDisplay value={inputValue} />
          </div>
        </>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
        {/* Контент постов из Mock API */}
          <h1>{postTitle}</h1>
          <p style={{ whiteSpace: "pre-line" }}>{postContent}</p>
        </>
      )}

      <button onClick={() => navigate("/posts")}>Back to Posts</button>
    </div>
  );
}

export default Post;