// import { useTransitionRouterPush } from "../../hooks/useViewTransition";
// import { POSTS } from "~/data/posts";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Home = () => {
  // const { startViewTransition } = useTransitionRouterPush();

  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <Link to={"/page2"}>Go to Page 2</Link>
    </div>
  );
};

export default Home;
