// import { useTransitionRouterPush } from "../../hooks/useViewTransition";
// import { POSTS } from "~/data/posts";
import styles from "./styles.module.css";

const Home = () => {
  // const { startViewTransition } = useTransitionRouterPush();

  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <a href={"/page2"}>Go to Page 2</a>
    </div>
  );
};

export default Home;
