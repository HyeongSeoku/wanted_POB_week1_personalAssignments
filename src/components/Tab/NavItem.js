import styles from './Tab.module.scss'

function NavItem({ title, index, currentMenu, setCurrentMenu, navRef, setCurrentIdx }) {
  const onClickNavMenu = (e) => {
    const { value } = e.currentTarget.dataset
    setCurrentMenu(value)
    setCurrentIdx(index)
  }

  return (
    <li className={currentMenu === title ? styles.selectedNavItemContainer : styles.navItemContainer}>
      <span
        className={styles.navTextContainer}
        role='button'
        tabIndex={index}
        data-value={title}
        onClick={onClickNavMenu}
        ref={navRef}
      >
        {title}
      </span>
    </li>
  )
}

export default NavItem
