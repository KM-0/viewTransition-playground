import { POSTS } from "../../data/posts";
import { useTransitionRouterPush } from "../../hooks/useViewTransition";
import styles from "./styles.module.css";

const Home = () => {
  const { startViewTransition } = useTransitionRouterPush();

  return (
    <div className={styles.container}>
      {POSTS.map((post) => {
        return (
          <div
            className={styles.card}
            onClick={() => {
              startViewTransition(`post/${post.id}`);
            }}
            key={post.id}
            style={{ "--target-transition-name": `post-${post.id}` }}
          >
            <h2
              className={styles.title}
              style={{ "--target-transition-name2": `title-${post.id}` }}
            >
              {post.title}
            </h2>
            <p className={styles.author}>By {post.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
