import styles from "./TaskHeader.module.css";

const TaskHeader = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="/ellipse-15@2x.png" />
          <div className={styles.belloutlineParent}>
            <img
              className={styles.belloutlineIcon}
              alt=""
              src="/belloutline.svg"
            />
            <div className={styles.ellipseGroup}>
              <div className={styles.groupChild} />
              <div className={styles.div}>2</div>
            </div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.avatarChild} />
          <img
            className={styles.profileimglargeborderIcon}
            alt=""
            src="/profileimglargeborder@2x.png"
          />
        </div>
      </div>
      <div className={styles.tasksWrapper}>
        <h1 className={styles.tasks}>Tasks</h1>
      </div>
    </header>
  );
};

export default TaskHeader;
