import styles from './socialNetworksWidget.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function SocialNetworksWidget() {
  return <div className={styles.socialNetworksWidget}>
    <div className={styles.facebook}>
      <FontAwesomeIcon
        icon={faFacebook}
        className={styles.socialMediaIconFb}
        size="2xl"
      />
    </div>
    <div className={styles.separatorLine}/>
    <div className={styles.youtube}>
      <div className={styles.ytIconWrapper}>
        <FontAwesomeIcon
          icon={faYoutube}
          className={styles.socialMediaIconYt}
          size="lg"
        />
      </div>
    </div>
  </div>
}

export default SocialNetworksWidget;