import { useEffect, useRef, useState } from 'react'
import styles from './Toggle.module.scss'
import { toggleData } from '../../util/constants/componentsData'

function Toggle() {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderLeft, setSliderLeft] = useState(0)
  const [select, setSelect] = useState('')
  const labelRef = useRef()
  const sliderRef = useRef()

  useEffect(() => {
    if (select === '기본') {
      setSliderLeft(0)
      return
    }
    if (select === '상세') {
      setSliderLeft(sliderWidth - 1)
    }
  }, [select])

  const handleToggle = (e) => {
    const { value } = e.currentTarget.dataset
    setSliderWidth(labelRef.current.offsetWidth - 1)
    setSelect(value)
  }

  return (
    <section className={styles.toggleSection}>
      <h2 className={styles.title}>토글</h2>
      <div className={styles.toggleContainer}>
        <div className={styles.radioGroup}>
          {toggleData.map((item, idx) => (
            <label className={styles.radioLabel} key={item.id} ref={labelRef}>
              <input type='radio' name='radio' value={item} id={item.id} />
              <span
                className={styles.radioText}
                role='button'
                tabIndex={idx}
                htmlFor={item.id}
                data-value={item.title}
                onClick={handleToggle}
              >
                {item.title}
              </span>
            </label>
          ))}
          <span
            className={styles.toggleSlider}
            ref={sliderRef}
            style={{
              left: `${sliderLeft}px`,
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Toggle
