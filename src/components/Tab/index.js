import { useEffect, useRef, useState } from 'react'
import styles from './Tab.module.scss'
import { tabData } from '../../util/constants/componentsData'
import NavItem from './NavItem'

function Tab() {
  const [navItemWidth, setNavItemWidth] = useState(0)
  const [currentMenu, setCurrentMenu] = useState('')
  const [currentImg, setCurrentImg] = useState('')
  const [currentIdx, setCurrentIdx] = useState(0)
  const navItemRef = useRef()

  useEffect(() => {
    setNavItemWidth(navItemRef.current.offsetWidth)
  }, [])

  useEffect(() => {
    if (currentMenu !== '') {
      const data = tabData.find((i) => i.title === currentMenu)
      setCurrentImg(data.contents)
    }
  }, [currentMenu])

  return (
    <section className={styles.tabSection}>
      <h2 className={styles.title}>탭</h2>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          {tabData.map((tab, idx) => (
            <NavItem
              key={tab.id}
              title={tab.title}
              index={idx}
              currentMenu={currentMenu}
              setCurrentMenu={setCurrentMenu}
              navRef={navItemRef}
              setCurrentIdx={setCurrentIdx}
            />
          ))}
        </ul>
      </nav>
      <div className={styles.selectBar}>
        <span
          style={{
            left: `${currentIdx === 0 ? '10px' : navItemWidth * currentIdx}px`,
          }}
          className={styles.selectSlider}
        />
      </div>
      <div className={styles.contentArea}>
        {currentMenu === '' ? (
          <div>메뉴를 탭해보세요</div>
        ) : (
          <img className={styles.contentImg} src={currentImg} alt={currentMenu} />
        )}
      </div>
    </section>
  )
}

export default Tab
