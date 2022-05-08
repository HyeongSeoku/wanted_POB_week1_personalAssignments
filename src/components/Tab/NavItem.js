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
        tabIndex='0'
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

// const NavItemContainer = styled.li`
//   list-style: none;
//   width: 33%;
//   opacity: ${(props) => (props.isSelected ? 1 : 0.5)};

//   &:hover {
//     cursor: pointer;
//     opacity: 1;
//   }
//   @media ${device.mobileM} {
//     font-size: 15px;
//   }
//   @media ${device.mobileS} {
//     font-size: 14px;
//   }
// `

// const NavText = styled.span``
