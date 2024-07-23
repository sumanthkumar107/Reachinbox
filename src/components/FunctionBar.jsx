import PropTypes from "prop-types";
import styles from "./FunctionBar.module.css";

const FunctionBar = ({ className = "" }) => {
  return (
    <div className={[styles.functionBar, className].join(" ")}>
      <div className={styles.avatarNameText}>
        <div className={styles.orlando}>Orlando</div>
        <a className={styles.orladomgmailcom}>orladom@gmail.com</a>
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.backButtonContainer}>
          <div className={styles.backActionParent}>
            <div className={styles.backAction}>
              <div className={styles.backCircleParent}>
                <div className={styles.backCircle} />
                <div className={styles.frameChild} />
              </div>
            </div>
            <div className={styles.meetingStatus}>
              <div className={styles.meetingCompleted}>Meeting Completed</div>
              <img
                className={styles.meetingStatusChild}
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
          <img
            className={styles.arrowBackIosIcon}
            alt=""
            src="/arrow-back-ios@2x.png"
          />
        </div>
      </div>
      <div className={styles.moveButtonContainer}>
        <div className={styles.moveParent}>
          <div className={styles.move}>Move</div>
          <img
            className={styles.arrowBackIosIcon1}
            alt=""
            src="/arrow-back-ios-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.moreOptionsContainer}>
        <div className={styles.moreHorizWrapper}>
          <img
            className={styles.moreHorizIcon}
            loading="lazy"
            alt=""
            src="/more-horiz.svg"
          />
        </div>
      </div>
    </div>
  );
};

FunctionBar.propTypes = {
  className: PropTypes.string,
};

export default FunctionBar;
