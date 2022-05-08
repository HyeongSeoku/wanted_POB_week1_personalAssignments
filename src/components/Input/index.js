import { useEffect, useState } from 'react'
import styles from './Input.module.scss'
import { faCheckCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Input() {
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [emailFocus, setEmailFocus] = useState(true)
  const [pwd, setPwd] = useState('')
  const [pwdVisible, setPwdVisible] = useState(false)

  useEffect(() => {
    console.log(pwdVisible)
  }, [pwdVisible])

  const onFocusEmail = (e) => {
    setEmailFocus(true)
  }

  const onBlurEmail = (e) => {
    setEmailFocus(false)
  }

  const isEmail = (asValue) => {
    const regExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/

    return regExp.test(asValue)
  }

  const onChangeEmail = (e) => {
    const { value } = e.currentTarget
    setEmail(value)
    isEmail(value) ? setEmailValid(true) : setEmailValid(false)
  }

  const onChangePwd = (e) => {
    const { value } = e.currentTarget
    setPwd(value)
  }

  const onClickEyeIcon = () => {
    setPwdVisible((current) => !current)
  }

  const handleBlurPwd = () => {
    setPwdVisible(false)
  }

  return (
    <section className={styles.inputSection}>
      <h2 className={styles.title}>인풋</h2>
      <div className={styles.tagContainer}>
        <span className={styles.tag}>E-mail</span>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.emailInput}
          placeholder='Email'
          type='text'
          value={email}
          onChange={onChangeEmail}
          onFocus={onFocusEmail}
          onBlur={onBlurEmail}
        />
        <span className={emailValid ? styles.correctIcon : styles.icon}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      </div>

      <div className={styles.validMsg}>{!emailValid && !emailFocus ? 'Invalid email address' : ' '}</div>
      <div className={styles.tagContainer}>
        <span className={styles.tag}>Password</span>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.pwdInput}
          placeholder='Password'
          type={pwdVisible ? 'text' : 'password'}
          value={pwd}
          onChange={onChangePwd}
          onBlur={handleBlurPwd}
        />
        <span
          role='button'
          tabIndex='0'
          className={pwdVisible ? styles.correctIcon : styles.icon}
          onClick={onClickEyeIcon}
        >
          {pwdVisible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
        </span>
      </div>
    </section>
  )
}

export default Input
