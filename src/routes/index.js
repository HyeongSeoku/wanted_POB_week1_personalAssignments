import { LogoImage } from '../assets/svgs'
import DropDown from '../components/DropDown'
import Input from '../components/Input'
import Slider from '../components/Slider'
import Tab from '../components/Tab'
import Toggle from '../components/Toggle'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <main className={styles.container} role='main'>
        <Toggle />
        <Tab />
        <Slider />
        <Input />
        <DropDown />
      </main>
    </div>
  )
}

export default App
