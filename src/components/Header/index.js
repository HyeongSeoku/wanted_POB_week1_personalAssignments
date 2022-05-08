import LogoSrc from '../../imgs/logo.png'
import styles from './Header.module.scss'

function Header() {
  const onClickLogo = () => {
    window.location.reload(false)
  }

  return (
    <header className={styles.headerContainer}>
      <div role='button' tabIndex='0' onClick={onClickLogo}>
        <img className={styles.logoImg} src={LogoSrc} alt='로고 이미지' />
      </div>
      <div className={styles.title}>원티드 프리온보딩 과제 제출</div>
    </header>
  )
}

export default Header
