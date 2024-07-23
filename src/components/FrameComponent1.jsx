import MailItem from "./MailItem";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.inboxFilterParent, className].join(" ")}>
      <div className={styles.inboxFilter}>
        <div className={styles.selectedInboxes}>
          <div className={styles.allInboxesOption}>
            <div className={styles.allInboxesLabelParent}>
              <div className={styles.allInboxesLabel}>
                <div className={styles.allInboxesRow}>
                  <a className={styles.allInboxs}>All Inbox(s)</a>
                  <div className={styles.allInboxesCount}>
                    <div className={styles.div}>􀆈</div>
                  </div>
                </div>
              </div>
              <div className={styles.inboxesSelected}>
                <b>{`25/25 `}</b>
                <span className={styles.inboxesSelected1}>
                  Inboxes selected
                </span>
              </div>
            </div>
          </div>
          <div className={styles.buttonfilledssfalsefalse}>
            <img
              className={styles.refreshIcon}
              loading="lazy"
              alt=""
              src="/refresh.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.functionBarParent}>
        <div className={styles.functionBar}>
          <div className={styles.search}>
            <img
              className={styles.searchSIcon}
              loading="lazy"
              alt=""
              src="/searchs.svg"
            />
            <a className={styles.searchPlaceholder}>Search</a>
            <input className={styles.input} placeholder="⌘/" type="text" />
          </div>
        </div>
        <div className={styles.functionBar1}>
          <div className={styles.newRepliesFilter}>
            <div className={styles.newRepliesOption}>
              <div className={styles.newRepliesRow}>
                <div className={styles.newRepliesLabel}>
                  <div className={styles.newRepliesTitle}>
                    <div className={styles.titleWrapper}>
                      <div className={styles.title}>26</div>
                    </div>
                  </div>
                </div>
                <div className={styles.newReplies}>New Replies</div>
              </div>
            </div>
            <div className={styles.newestFilter}>
              <div className={styles.newest}>Newest</div>
              <img
                className={styles.path7372Icon}
                alt=""
                src="/path-7372-6.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mailList}>
        <div className={styles.mailPreviewList}>
          <div className={styles.mail}>
            <img
              className={styles.expandedMailIcon}
              loading="lazy"
              alt=""
              src="/vector-2746.svg"
            />
            <div className={styles.avatarNameText}>
              <div className={styles.senderDetails}>
                <div className={styles.beatagmailcomParent}>
                  <div className={styles.beatagmailcom}>Beata@gmail.com</div>
                  <div className={styles.iveTriedA}>I've tried a lot and .</div>
                </div>
                <div className={styles.expandedMailStatus}>
                  <div className={styles.expandedMailStatusRow}>
                    <div className={styles.expandedMailStatusIcon}>
                      <div className={styles.expandedUnreadStatusParent}>
                        <div className={styles.expandedUnreadStatus} />
                        <div className={styles.expandedReadStatus} />
                      </div>
                      <div className={styles.title1}>Interested</div>
                    </div>
                  </div>
                  <div className={styles.expandedAction}>
                    <div className={styles.expandedActionRow}>
                      <img
                        className={styles.icon}
                        loading="lazy"
                        alt=""
                        src="/.svg"
                      />
                      <div className={styles.title2}>Campaign Name</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.senderAvatar} />
              <div className={styles.senderAvatar1} />
              <div className={styles.mar7}>Mar 7</div>
            </div>
          </div>
          <MailItem
            sanyagmailcom="Sanya@gmail.com"
            iveTriedALotAnd="I've tried a lot and ."
            title="Closed"
          />
          <MailItem
            sanyagmailcom="william@gmail.com"
            iveTriedALotAnd="Payment not going through"
            title="Interested"
          />
          <MailItem
            sanyagmailcom="johnson@gmail.com"
            iveTriedALotAnd="Could you tell me more about it"
            title="Meeting Booked"
          />
          <div className={styles.mailItem}>
            <img
              className={styles.mailItemChild}
              loading="lazy"
              alt=""
              src="/vector-2746.svg"
            />
            <div className={styles.mail1}>
              <div className={styles.avatarNameText1}>
                <div className={styles.frameParent}>
                  <div className={styles.orlandogmailcomParent}>
                    <div className={styles.orlandogmailcom}>
                      orlando@gmail.com
                    </div>
                    <div className={styles.hiIAm}>Hi, I am interested</div>
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.frameWrapper}>
                      <div className={styles.frameContainer}>
                        <div className={styles.ellipseParent}>
                          <div className={styles.frameChild} />
                          <div className={styles.frameItem} />
                        </div>
                        <div className={styles.title3}>Meeting Completed</div>
                      </div>
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.parent}>
                        <img
                          className={styles.icon1}
                          loading="lazy"
                          alt=""
                          src="/.svg"
                        />
                        <div className={styles.title4}>Campaign Name</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.div1}>18:30</div>
              <img
                className={styles.mailChild}
                alt=""
                src="/group-2087325560.svg"
              />
            </div>
          </div>
          <div className={styles.mailItem1}>
            <img
              className={styles.mailItemItem}
              loading="lazy"
              alt=""
              src="/vector-2746.svg"
            />
            <div className={styles.mail2}>
              <div className={styles.avatarNameText2}>
                <div className={styles.frameParent1}>
                  <div className={styles.williamgmailcomParent}>
                    <div className={styles.williamgmailcom}>
                      <span>william@gmail.com</span>
                    </div>
                    <div className={styles.iveTriedA1}>
                      I've tried a lot and .
                    </div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.frameParent3}>
                        <div className={styles.ellipseGroup}>
                          <div className={styles.frameInner} />
                          <div className={styles.rectangleDiv} />
                        </div>
                        <div className={styles.title5}>Interested</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.group}>
                        <img className={styles.icon2} alt="" src="/.svg" />
                        <div className={styles.title6}>Campaign Name</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mar71}>Mar 7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
