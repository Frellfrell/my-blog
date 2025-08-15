import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Posts.module.css";

export default function Posts() {
  const [posts, setPosts] = useState([
    /*{ id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },*/
  ]);
const API_URL = "https://6890e3a6944bf437b597aa06.mockapi.io/api/v1/posts";

//  Фиксированный первый пост
 

  useEffect(() => {
    const myPost = { id: "0", title: "MyPost" };
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        //  Добавляем MyPost первым, остальные из API
        setPosts([myPost, ...data.slice(0, 3)]); // берём первые 3 поста из API
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.posts}>
      <h1>List of Posts</h1>
      <ul className={styles.postsList}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
