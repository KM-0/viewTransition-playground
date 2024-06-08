import { useParams } from "react-router-dom";
import { POSTS } from "../../data/posts";
import styles from "./styles.module.css";

const PostDetail = () => {
  const { id } = useParams();
  if (!id) return <div>error!!</div>;

  const post = POSTS.find((post) => post.id === parseInt(id));
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post?.title}</h1>
      <p className={styles.author}>By {post?.author}</p>
      <div className={styles.content}>{post?.body}</div>
    </div>
  );
};

export default PostDetail;
