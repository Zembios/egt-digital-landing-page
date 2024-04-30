import styles from './footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return <div className={styles.footer}>
    <div className={styles.desktopFooter}>
      <div className={styles.productLines}>
        <div className={styles.productLine}>
          <div className={styles.productLineTitle}>R-LINE</div>
          <div className={styles.productLineLink}>
            Premier R4
          </div>
          <div className={styles.productLineLink}>
            Premier R5
          </div>
          <div className={styles.productLineLink}>
            Premier R6
          </div>
        </div>

        <div className={styles.productLine}>
          <div className={styles.productLineTitle}>R-LINE</div>
          <div className={styles.productLineLink}>
            Premier R4
          </div>
          <div className={styles.productLineLink}>
            Premier R5
          </div>
          <div className={styles.productLineLink}>
            Premier R6
          </div>
        </div>

        <div className={styles.productLine}>
          <div className={styles.productLineTitle}>R-LINE</div>
          <div className={styles.productLineLink}>
            Premier R4
          </div>
          <div className={styles.productLineLink}>
            Premier R5
          </div>
          <div className={styles.productLineLink}>
            Premier R6
          </div>
        </div>

        <div className={styles.productLine}>
          <div className={styles.productLineTitle}>OUR SOLUTION</div>
          <div className={styles.productLineLink}>
            SBG
          </div>
        </div>
      </div>

      <div className={styles.companyAndSocialNetworks}>
        <div className={`${styles.productLine} mr-[100px]`}>
          <div className={styles.productLineTitle}>COMPANY</div>
          <div className={styles.productLineLink}>
            News & Events
          </div>
          <div className={styles.productLineLink}>
            About Us
          </div>
          <div className={styles.productLineLink}>
            Contact Us
          </div>
          <div className={styles.productLineLink}>
            Careers
          </div>
        </div>

        <div className={styles.productLine}>
          <div className={styles.productLineTitle}>SOCIAL NETWORKS</div>

          <div className={styles.socialMediasDesktop}>
            <div className={styles.facebookDesktop}>
              <FontAwesomeIcon
                icon={faFacebook}
                className={styles.socialMediaIconFb}
                size="2xl"
              />
            </div>
            <div className={styles.youtubeDesktop}>
              <div className={styles.ytIconWrapper}>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className={styles.socialMediaIconYt}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.mobileFooter}>
      <div className={styles.link}>News & Events</div>
      <div className={styles.link}>About Us</div>
      <div className={styles.link}>Contact Us</div>
      <div className={styles.link}>Careers</div>

      <div className={styles.socialMedias}>
        <div className={styles.facebook}>
          <FontAwesomeIcon
            icon={faFacebook}
            className={styles.socialMediaIconFb}
            size="2xl"
          />
        </div>
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
    </div>

    <div className={styles.copyright}>
      © 2024 Euro Games Technology All rights reserved.
    </div>
  </div>
}

export default Footer;