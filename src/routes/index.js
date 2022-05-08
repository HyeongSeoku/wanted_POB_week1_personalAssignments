import { LogoImage } from '../assets/svgs'
import Input from '../components/Input'
import Slider from '../components/Slider'
import Tab from '../components/Tab'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <main className={styles.container} role='main'>
        <Tab />
        <Slider />
        <Input />
      </main>
    </div>
  )
}

export default App
