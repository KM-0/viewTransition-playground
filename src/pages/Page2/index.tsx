import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Page2 = () => {
  return (
    <div className={styles.container}>
      <h1>Page2 Page</h1>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
};

export default Page2;
