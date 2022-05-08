import { useEffect, useState } from 'react'
import styles from './Slider.module.scss'
import { sliderData } from '../../util/constants/componentsData'
import classNames from 'classnames'

function Slider() {
  const [sliderValue, setSliderValue] = useState(1)

  useEffect(() => {}, [])

  const onChangeSlider = (e) => {
    const { value } = e.currentTarget
    setSliderValue(value)
  }

  const onClickTag = (e) => {
    const { tag } = e.currentTarget.dataset
    setSliderValue(tag)
  }

  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.title}>슬라이더</h2>
      <div className={styles.board}>
        <span className={styles.boardText}>{sliderValue}</span>
        <span className={styles.boardPercent}>%</span>
      </div>
      <div className={styles.progressContainer}>
        <input
          className={styles.silderInput}
          type='range'
          min='1'
          max='100'
          list='tickmarks'
          onChange={onChangeSlider}
          value={sliderValue}
          style={{
            background: `linear-gradient(
            to right,
            rgb(46, 170, 220) 1%,
            rgb(46, 170, 220) ${sliderValue}%,
            #ebebeb ${sliderValue}%,
            #ebebeb 100%
          )`,
          }}
        />
        {sliderData.map((dot) => (
          <div key={dot.id} className={classNames(styles.progressDot, sliderValue >= dot.data && styles.isFilled)} />
        ))}
      </div>
      <div className={styles.tagContainer}>
        {sliderData.map((item, idx) => (
          <span
            className={styles.tagSpan}
            role='button'
            tabIndex={item.tabIndex}
            key={item.id}
            data-tag={item.data}
            onClick={onClickTag}
          >
            {item.data}%
          </span>
        ))}
      </div>
    </section>
  )
}

export default Slider
