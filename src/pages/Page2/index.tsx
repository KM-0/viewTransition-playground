import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Page2 = () => {
  return (
    <div className={styles.container}>
      <h1>Page2 Page</h1>
      <Link to={"/"}>
        <a>Go to Home</a>
      </Link>
    </div>
  );
};

export default Page2;
