import { POSTS } from "../../data/posts";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {POSTS.map((post) => {
        return (
          <div
            className={styles.card}
            onClick={() => {
              navigate(`post/${post.id}`);
            }}
          >
            <h2 className={styles.title}>{post.title}</h2>
            <p className={styles.author}>By {post.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
