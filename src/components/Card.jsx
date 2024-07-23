import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "" }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.cardChild} />
      <div className={styles.cardInfo}>
        <div className={styles.recipientInfo}>
          <div className={styles.newProductLaunch}>New Product Launch</div>
          <div className={styles.fromJeanneicloudcom}>
            from : jeanne@icloud.com cc : lennon.j@mail.com
          </div>
          <div className={styles.toLennonjmailcom}>to : lennon.j@mail.com</div>
        </div>
        <div className={styles.june2022916amWrapper}>
          <div className={styles.june2022}>20 june 2022 : 9:16AM</div>
        </div>
      </div>
      <div className={styles.messagePreview}>
        <div className={styles.messageRow}>
          <div className={styles.separator} />
          <div className={styles.hiFirstNameIWouldLikeWrapper}>
            <div className={styles.hiFirstNameIContainer}>
              <p className={styles.hiFirstName}>{`Hi {FIRST_NAME},`}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.iWouldLike}>
                I would like to introduce you to SaaSgrow, a productized design
                service specifically tailored for saas startups. Our aim is to
                help you enhance the user experience and boost the visual appeal
                of your software products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
};

export default Card;
