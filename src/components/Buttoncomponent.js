import styles from "./Buttoncomponent.module.css";

const Buttoncomponent = ({ homeOutline, home }) => {
  return (
    <button className={styles.homeoutlineParent}>
      <img className={styles.homeoutlineIcon} alt="" src={homeOutline} />
      <div className={styles.homeWrapper}>
        <h1 className={styles.home}>{home}</h1>
      </div>
    </button>
  );
};

export default Buttoncomponent;
