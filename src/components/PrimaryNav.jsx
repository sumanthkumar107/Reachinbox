import PropTypes from "prop-types";
import styles from "./PrimaryNav.module.css";

const PrimaryNav = ({ className = "" }) => {
  return (
    <div className={[styles.primaryNav, className].join(" ")}>
      <div className={styles.logoHolder}>
        <div className={styles.logo12Wrapper}>
          <img
            className={styles.logo12Icon}
            loading="lazy"
            alt=""
            src="/logo-12@2x.png"
          />
        </div>
      </div>
      <div className={styles.menuContainer}>
        <div className={styles.leftPanelTop}>
          <div className={styles.menuList}>
            <img
              className={styles.homeIcon}
              loading="lazy"
              alt=""
              src="/home@2x.png"
            />
            <img
              className={styles.emailIcon}
              loading="lazy"
              alt=""
              src="/email-3.svg"
            />
            <img
              className={styles.emailIcon1}
              loading="lazy"
              alt=""
              src="/email-4.svg"
            />
            <div className={styles.menuItemLabels}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/-6.svg"
              />
            </div>
            <img
              className={styles.emailIcon2}
              loading="lazy"
              alt=""
              src="/email-5.svg"
            />
            <div className={styles.indicator}>
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/-7.svg"
              />
              <div className={styles.circleParent}>
                <div className={styles.circle} />
                <b className={styles.count}>12+</b>
              </div>
            </div>
            <img
              className={styles.barChartIcon}
              loading="lazy"
              alt=""
              src="/bar-chart.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.lsqUser}>
        <div className={styles.userIcon}>
          <div className={styles.userIcon1}>
            <img
              className={styles.userIconChild}
              loading="lazy"
              alt=""
              src="/ellipse-612.svg"
            />
            <img
              className={styles.userIconItem}
              alt=""
              src="/ellipse-685.svg"
            />
            <div className={styles.tu}>AS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

PrimaryNav.propTypes = {
  className: PropTypes.string,
};

export default PrimaryNav;
