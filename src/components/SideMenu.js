import Buttoncomponent from "./Buttoncomponent";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <Buttoncomponent homeOutline="/homeoutline@2x.png" home="Home" />
      <Buttoncomponent homeOutline="/useroutline@2x.png" home="Me" />
      <Buttoncomponent homeOutline="/inboxoutline@2x.png" home="Inbox" />
      <Buttoncomponent homeOutline="/usersaltoutline@2x.png" home="My Team" />
      <Buttoncomponent
        homeOutline="/companyoutline@2x.png"
        home="Organization"
      />
      <Buttoncomponent homeOutline="/settingoutline@2x.png" home="Settings" />
    </div>
  );
};

export default SideMenu;
