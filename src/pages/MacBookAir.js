import SideMenu from "../components/SideMenu";
import TaskHeader from "../components/TaskHeader";
import Sectionheader from "../components/Sectionheader";
import styles from "./MacBookAir.module.css";

const MacBookAir = () => {
  return (
    <div className={styles.macbookAir1}>
      <div className={styles.frameParent}>
        <div className={styles.groupWrapper}>
          <img className={styles.groupIcon} alt="" src="/group@2x.png" />
        </div>
        <SideMenu />
      </div>
      <div className={styles.frameGroup}>
        <TaskHeader />
        <div className={styles.tasksGrid}>
          <Sectionheader />
          <div className={styles.tasksGridInner}>
            <div className={styles.frameContainer}>
              <div className={styles.headParent}>
                <div className={styles.head}>
                  <div className={styles.projectWrapper}>
                    <h1 className={styles.project}>Project</h1>
                  </div>
                </div>
                <div className={styles.webScreensDesignWrapper}>
                  <div className={styles.webScreensDesign}>
                    Web Screens Design
                  </div>
                </div>
                <div className={styles.webScreensDesignWrapper}>
                  <div className={styles.webScreensDesign}>
                    Web Screens Design
                  </div>
                </div>
                <div className={styles.webScreensDesignWrapper}>
                  <div className={styles.webScreensDesign}>
                    Web Screens Design
                  </div>
                </div>
                <div className={styles.webScreensDesignWrapper}>
                  <div className={styles.webScreensDesign}>
                    Web Screens Design
                  </div>
                </div>
              </div>
              <div className={styles.headGroup}>
                <div className={styles.head}>
                  <div className={styles.projectContainer}>
                    <h1 className={styles.project1}>Started Date</h1>
                  </div>
                </div>
                <div className={styles.webScreensDesignWrapper}>
                  <div className={styles.div}>12/05/2022</div>
                </div>
                <div className={styles.webScreensDesignWrapper}>
                  <div className={styles.div}>12/05/2022</div>
                </div>
                <div className={styles.webScreensDesignWrapper}>
                  <div className={styles.div}>12/05/2022</div>
                </div>
                <div className={styles.webScreensDesignWrapper}>
                  <div className={styles.div}>12/05/2022</div>
                </div>
              </div>
              <div className={styles.headGroup}>
                <div className={styles.head}>
                  <div className={styles.projectContainer}>
                    <h1 className={styles.project1}>Total Hours</h1>
                  </div>
                </div>
                <div className={styles.hrsWrapper}>
                  <div className={styles.webScreensDesign}>123:00 Hrs</div>
                </div>
                <div className={styles.hrsWrapper}>
                  <div className={styles.webScreensDesign}>123:00 Hrs</div>
                </div>
                <div className={styles.hrsWrapper}>
                  <div className={styles.webScreensDesign}>123:00 Hrs</div>
                </div>
                <div className={styles.hrsWrapper}>
                  <div className={styles.webScreensDesign}>123:00 Hrs</div>
                </div>
              </div>
              <div className={styles.headParent1}>
                <div className={styles.head3}>
                  <div className={styles.projectContainer}>
                    <h1 className={styles.project1}>Status</h1>
                  </div>
                </div>
                <div className={styles.tagsbadgesWrapper}>
                  <div className={styles.tagsbadges}>
                    <img
                      className={styles.tagAltoutlineIcon}
                      alt=""
                      src="/tagaltoutline.svg"
                    />
                    <div className={styles.success}>Completed</div>
                  </div>
                </div>
                <div className={styles.tagsbadgesWrapper}>
                  <div className={styles.tagsbadges}>
                    <img
                      className={styles.tagAltoutlineIcon}
                      alt=""
                      src="/tagaltoutline.svg"
                    />
                    <div className={styles.success}>Completed</div>
                  </div>
                </div>
                <div className={styles.tagsbadgesFrame}>
                  <div className={styles.tagsbadges2}>
                    <img
                      className={styles.tagAltoutlineIcon}
                      alt=""
                      src="/tagaltoutline.svg"
                    />
                    <div className={styles.success}>On Hold</div>
                  </div>
                </div>
                <div className={styles.tagsbadgesWrapper1}>
                  <div className={styles.tagsbadges3}>
                    <img
                      className={styles.tagAltoutlineIcon}
                      alt=""
                      src="/tagaltoutline.svg"
                    />
                    <div className={styles.success}>In Progress</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir;
