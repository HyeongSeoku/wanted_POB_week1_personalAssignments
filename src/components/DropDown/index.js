import { useEffect, useState } from 'react'
import styles from './DropDown.module.scss'
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dropDownData } from '../../util/constants/componentsData'

function DropDown() {
  const [selected, setSelected] = useState('All Teams')
  const [searchWord, setSearchWord] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [data, setData] = useState(dropDownData)

  useEffect(() => {
    if (!isMenuOpen) setSearchWord('')
  }, [isMenuOpen])

  useEffect(() => {
    if (searchWord === '') {
      setData(dropDownData)
    } else {
      const newData = dropDownData.filter((i) =>
        i.title.replace(/ /g, '').toLowerCase().includes(searchWord.toLowerCase())
      )
      setData(newData)
    }
  }, [searchWord])

  const onClickSelecter = () => {
    setIsMenuOpen((current) => !current)
  }

  const onChangeSearch = (e) => {
    const { value } = e.target
    setSearchWord(value)
  }

  const handleSelectItem = (e) => {
    const { team } = e.currentTarget.dataset
    setSearchWord(team)
    setSelected(team)
    setIsMenuOpen(false)
  }

  return (
    <section className={styles.dropDownSection}>
      <h2 className={styles.title}>드롭 다운</h2>
      <div className={styles.selectedItemContainer} role='button' tabIndex='0' onClick={onClickSelecter}>
        <span className={styles.selectedItemSpan}>{selected}</span>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.dropDownContainer}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              className={styles.searchInput}
              placeholder='Search Teams'
              /* autoFocus */ value={searchWord}
              onChange={onChangeSearch}
            />
          </div>
          <div className={styles.dropDownItemContainer}>
            {data.map((item, idx) => (
              <div
                className={styles.dropDownItem}
                key={item.id}
                role='button'
                tabIndex={idx}
                data-team={item.title}
                onClick={handleSelectItem}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
export default DropDown
