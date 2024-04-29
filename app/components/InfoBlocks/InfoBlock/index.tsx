import styles from './infoBlock.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { InfoBlockType } from "@/utils/models";

interface Props {
  type: InfoBlockType;
  icon: IconDefinition;
  img: string;
  title: string;
  subtitle: string;
  description: string;
  actionBtnTxt: string;
}

function InfoBlock({type, title, icon, img, subtitle, description, actionBtnTxt}: Props) {
  return <div className={styles.infoBlock}>
    <div className={styles.infoBlockContent}>
      <div className={styles.infoTypeContainer}>
        <FontAwesomeIcon
          icon={icon}
          className={styles.icon}
        />
        <span>{type}</span>
      </div>

      <img
        src={img}
        className={styles.image}
      />

      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>

      <div className={styles.description}>
        {description}
      </div>
    </div>

    <div className={styles.readMoreBtn}>{actionBtnTxt}</div>
  </div>
}

export default InfoBlock;