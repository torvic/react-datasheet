import { useState } from 'react'
import styles from './index.module.css'

const Header = () => {
	const [toggle, setToggle] = useState(false)
	const handleToggle = () => {
		setToggle(prev => !prev)
	}
  return (
    <header className={styles.header}>
      <section className={styles.header__container}>
        <div className={styles.logo}>
          <a href='/' className={styles.logo__link}>
            torvic
          </a>
        </div>
        <nav className={`${styles.menu} ${toggle && styles.menu_isActive}`}>
          <a href='#inicio' className={styles.menu__link}>
            Inicio
          </a>
          <a href='#acerca' className={styles.menu__link}>
            Acerca
          </a>
          <a href='#servicios' className={styles.menu__link}>
            Servicios
          </a>
          <a href='#portafolio' className={styles.menu__link}>
            Portafolio
          </a>
          <a href='#testimonios' className={styles.menu__link}>
            Testimonios
          </a>
          <a href='#contacto' className={styles.menu__link}>
            Contacto
          </a>
        </nav>
        <button className={styles.menu__btn} onClick={handleToggle}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className={styles.menu__svg}
          >
            <path d='M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z' />
          </svg>
          <svg
            className={`${styles.menu__btn_hidden} ${styles.menu__svg}`}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
          </svg>
        </button>
      </section>
    </header>
  )
}

export default Header
