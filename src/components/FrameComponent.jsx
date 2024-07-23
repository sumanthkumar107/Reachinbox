import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.titleParent, className].join(" ")}>
      <a className={styles.title}>Onebox</a>
      <div className={styles.groupParent}>
        <img className={styles.frameChild} alt="" src="/group-1.svg" />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.workspaceInfo}>
        <div className={styles.avatarContainer}>
          <div className={styles.statusIndicator}>
            <div className={styles.status} />
          </div>
          <div className={styles.lightMode}>
            <img
              className={styles.themeIcon}
              loading="lazy"
              alt=""
              src="/vector-11.svg"
            />
          </div>
        </div>
        <div className={styles.workspaceNameContainer}>
          <div className={styles.dropdown}>
            <div className={styles.nameWrapper}>
              <div className={styles.name}>
                <div className={styles.timsWorkspace}>Tim’s Workspace</div>
              </div>
            </div>
            <img
              className={styles.arrowBackIosIcon}
              alt=""
              src="/arrow-back-ios-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
