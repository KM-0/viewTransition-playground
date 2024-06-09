import { useParams } from "react-router-dom";
import { POSTS } from "../../data/posts";
import styles from "./styles.module.css";
import { useTransitionRouterPush } from "../../hooks/useViewTransition";

const PostDetail = () => {
  const { id } = useParams();
  const { startViewTransition } = useTransitionRouterPush();
  if (!id) return <div>error!!</div>;

  const post = POSTS.find((post) => post.id === parseInt(id));
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={() => startViewTransition("/")}>
        Go Back
      </div>
      <h1 className={`${styles.title} transition-title`}>{post?.title}</h1>
      <p className={styles.author}>By {post?.author}</p>
      <div className={styles.content}>{post?.body}</div>
    </div>
  );
};

export default PostDetail;
