'use client';
import styles from './desktopMenuDropdown.module.scss';

interface Props {
  title: string;
  links: string[];
}

function DesktopMenuDropdown({title, links}: Props) {

  return <div className={styles.menuDropdown}>
    {title}
    <div className={styles.dropdownLinks}>
      {
        links.map(link => {
          return <div key={`links-${link}`} className={styles.link}>
            {link}
          </div>
        })
      }
    </div>
  </div>
}

export default DesktopMenuDropdown;