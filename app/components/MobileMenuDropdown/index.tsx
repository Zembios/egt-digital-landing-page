'use client';
import styles from './mobileMenuDropdown.module.scss';
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  links: string[];
}

function MobileMenuDropdown({title, links}: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return <div className={styles.menuDropdown}>
    <div className={styles.titleContainer} onClick={() => setDropdownOpen(!dropdownOpen)}>
      <div className={`${styles.dropdownTitle} ${dropdownOpen ? styles.titleActive : ''}`}>
        {title}
      </div>

      <FontAwesomeIcon
        icon={faAngleDown}
        className={`${styles.dropdownTriggerIcon} ${dropdownOpen ? styles.dropdownTriggerIconActive : ''}`}
      />
    </div>
    <div className={`${styles.dropdownLinks} ${dropdownOpen ? '' : styles.hidden}`}>
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

export default MobileMenuDropdown;