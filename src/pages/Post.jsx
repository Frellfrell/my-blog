import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Post.module.css";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  /*const posts = {
    1: "Contents of the first post...",
    2: "Contents of the second post...",
    3: "Contents of the third post...",
  };

  const content = posts[id] || "Post not found.";*/
const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://6890e3a6944bf437b597aa06.mockapi.io/api/v1/posts";

  useEffect(() => {
    if (id === "0") {
      const myPost = {
        id: "0",
        title: "MyPost",
        content: `Этот блог создан как площадка для демонстрации моих навыков работы с элементами интерфейса, маршрутизацией и структурой приложения.This blog was created as a platform to showcase my skills in working with interface elements, routing, and application structure.
        
Здесь вы сможете увидеть примеры кода, оформление страниц, работу с API и многое другое.Here you will find code examples, page layouts, API interactions, and much more.

Каждая публикация — это небольшой эксперимент, в котором я показываю, как можно использовать разные технологии для создания современных веб-приложений.Each post is a small experiment in which I demonstrate how to use different technologies to create modern web applications.`,
      };
      setPost(myPost);
      setLoading(false);
    } else {
      fetch(`${API_URL}/${id}`)
        .then(res => res.json())
        .then(data => {
          setPost(data);
          setLoading(false);
        })
        .catch(() => {
          setPost({ title: "Post not found", content: "" });
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Загрузка...</p>;



  return (
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
      <button onClick={() => navigate("/posts")}>Back to Posts</button>
    </div>
  );
}
