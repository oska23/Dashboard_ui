import styles from "./Sectionheader.module.css";

const Sectionheader = () => {
  return (
    <div className={styles.fri13MayParent}>
      <h1 className={styles.fri13May}>Fri, 13 May</h1>
      <div className={styles.frameWrapper}>
        <div className={styles.calendarAltoutlineWrapper}>
          <div className={styles.calendarAltoutline}>
            <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.thisWeekParent}>
            <h1 className={styles.thisWeek}>This Week</h1>
            <img
              className={styles.arrowChevronForward}
              alt=""
              src="/arrow-chevron-forward@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionheader;
