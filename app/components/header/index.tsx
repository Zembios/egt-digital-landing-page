"use client";
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars, faXmark, faFlag, faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileMenuDropdown from "@/app/components/MobileMenuDropdown";
import DesktopMenuDropdown from "@/app/components/DesktopMenuDropdown";

function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return <div className={styles.header}>
    <div className={styles.headerInner}>
      {/* Desktop content */}
      <div className={'flex h-full items-center'}>
        <img className={styles.appLogo} src={'img/app-logo.svg'}/>
        <div className={styles.desktopMenuLeft}>
          <DesktopMenuDropdown
            title={'R-LINE'}
            links={['Premier R4', 'Premier R6', 'Premier R8']}
          />
          <DesktopMenuDropdown
            title={'S-LINE'}
            links={['Premier R4', 'Premier R6', 'Premier R8']}
          />
          <DesktopMenuDropdown
            title={'T-LINE'}
            links={['Premier R4', 'Premier R6', 'Premier R8']}
          />
          <DesktopMenuDropdown
            title={'SBG'}
            links={['Premier R4', 'Premier R6', 'Premier R8']}
          />
        </div>
      </div>

      <div className={styles.desktopMenuRight}>
        <div className={'mx-4 cursor-pointer text-white z-50'}>News & Events</div>
        <div className={styles.linkSeparator}/>
        <div className={'mx-4 cursor-pointer text-white z-50'}>About Us</div>
        <div className={styles.linkSeparator}/>
        <div className={'mx-4 cursor-pointer text-white z-50'}>Contact Us</div>
        <div className={styles.linkSeparator}/>
        <div className={styles.langSwitcher}>
          <FontAwesomeIcon
            icon={faFlag}
            className={styles.langSwitcherIcon}
          />

          <span>EN</span>

          <FontAwesomeIcon
            icon={faAngleDown}
            className={styles.langSwitcherDropdownTrigger}
          />
        </div>
      </div>

      {/* Mobile content */}
      <div className={styles.mobileMenu}>
        <FontAwesomeIcon
          icon={faBars}
          className={`${styles.burgerMenuIcon} ${burgerMenuOpen ? styles.hidden : ''}`}
          onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
        />
        <div className={`${styles.burgerMenuContainer} ${burgerMenuOpen ? '' : styles.hidden}`}>
          <FontAwesomeIcon
            icon={faXmark}
            className={styles.burgerMenuClose}
            onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
          />
          <div className={styles.linkCollection}>
            <MobileMenuDropdown
              title={'R-LINE'}
              links={['Premier R4', 'Premier R6', 'Premier R8']}
            />
            <MobileMenuDropdown
              title={'S-LINE'}
              links={['Premier R4', 'Premier R6', 'Premier R8']}
            />
            <MobileMenuDropdown
              title={'T-LINE'}
              links={['Premier R4', 'Premier R6', 'Premier R8']}
            />
            <MobileMenuDropdown
              title={'SBG'}
              links={['Premier R4', 'Premier R6', 'Premier R8']}
            />

            <div className={'mt-4 cursor-pointer'}>News & Events</div>
            <div className={'mt-4 cursor-pointer'}>About Us</div>
            <div className={'mt-4 cursor-pointer'}>Contact Us</div>

            <div className={styles.langSwitcher}>
              <FontAwesomeIcon
                icon={faFlag}
                className={styles.langSwitcherIcon}
              />

              <span>EN</span>

              <FontAwesomeIcon
                icon={faAngleDown}
                className={styles.langSwitcherDropdownTrigger}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Header;