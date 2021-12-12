import Header from '../Header'
import Footer from '../Footer'
import styles from './index.module.scss'
const Wrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper_view}>{children}</div>
      <Footer />
    </div>
  )
}

export default Wrapper
