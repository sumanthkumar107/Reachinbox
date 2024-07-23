import PropTypes from "prop-types";
import styles from "./MailItem.module.css";

const MailItem = ({
  className = "",
  sanyagmailcom,
  iveTriedALotAnd,
  title,
}) => {
  return (
    <div className={[styles.mailItem, className].join(" ")}>
      <img
        className={styles.mailIconList}
        loading="lazy"
        alt=""
        src="/vector-2746.svg"
      />
      <div className={styles.mail}>
        <div className={styles.avatarNameText}>
          <div className={styles.senderInfoRow}>
            <div className={styles.senderNameRow}>
              <div className={styles.sanyagmailcom}>{sanyagmailcom}</div>
              <div className={styles.iveTriedA}>{iveTriedALotAnd}</div>
            </div>
            <div className={styles.mailStatusList}>
              <div className={styles.mailStatusRow}>
                <div className={styles.mailStatusIconRow}>
                  <div className={styles.unreadStatusListParent}>
                    <div className={styles.unreadStatusList} />
                    <div className={styles.readStatusList} />
                  </div>
                  <div className={styles.title}>{title}</div>
                </div>
              </div>
              <div className={styles.mailActionList}>
                <div className={styles.mailActionRow}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/.svg"
                  />
                  <div className={styles.title1}>Campaign Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mar7}>Mar 7</div>
      </div>
    </div>
  );
};

MailItem.propTypes = {
  className: PropTypes.string,
  sanyagmailcom: PropTypes.string,
  iveTriedALotAnd: PropTypes.string,
  title: PropTypes.string,
};

export default MailItem;
