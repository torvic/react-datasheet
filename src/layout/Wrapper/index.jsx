import Header from '../Header'
import Footer from '../Footer'
import styles from './index.module.css'
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
