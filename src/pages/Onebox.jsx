import FrameComponent2 from "../components/FrameComponent2";
import FunctionBar from "../components/FunctionBar";
import FrameComponent1 from "../components/FrameComponent1";
import Card from "../components/Card";
import PrimaryNav from "../components/PrimaryNav";
import FrameComponent from "../components/FrameComponent";
import styles from "./Onebox.module.css";

const Onebox = () => {
  return (
    <div className={styles.onebox}>
      <a className={styles.text}>Create</a>
      <FrameComponent2 />
      <header className={styles.userInteraction}>
        <FunctionBar />
        <div className={styles.leadDetailsWrapper}>
          <div className={styles.leadDetails}>Lead Details</div>
        </div>
      </header>
      <img className={styles.oneboxChild} alt="" src="/vector-2745.svg" />
      <div className={styles.replyButtons}>
        <button className={styles.buttonfilledssfalsefalse}>
          <img className={styles.replyIcon} alt="" src="/reply.svg" />
          <div className={styles.actionLabels}>
            <div className={styles.reply}>Reply</div>
          </div>
        </button>
        <div className={styles.buttonfilledssfalsefalse1}>
          <img className={styles.replyIcon1} alt="" src="/reply-1.svg" />
          <div className={styles.forwardWrapper}>
            <div className={styles.forward}>Forward</div>
          </div>
        </div>
      </div>
      <div className={styles.oneboxItem} />
      <div className={styles.oneboxInner} />
      <div className={styles.expandParent}>
        <div className={styles.expand}>
          <img
            className={styles.expandIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className={styles.viewRepliesLabelWrapper}>
          <div className={styles.viewRepliesLabel}>
            <div className={styles.viewAll4Container}>
              <span>{`View all `}</span>
              <span className={styles.span}>{`4 `}</span>
              <span>replies</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.todayLabelWrapper}>
        <div className={styles.todayLabel}>
          <a className={styles.today}>Today</a>
        </div>
      </div>
      <FrameComponent1 />
      <Card />
      <PrimaryNav />
      <FrameComponent />
      <img
        className={styles.separatorIcon}
        loading="lazy"
        alt=""
        src="/vector-2745.svg"
      />
    </div>
  );
};

export default Onebox;
