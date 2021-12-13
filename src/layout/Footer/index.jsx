import { Container } from 'react-bootstrap'
import styles from './index.module.scss'

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-dark text-light`}>
      <Container>
        <p className='pt-4'>Shopping Cart by torvic | 2021</p>
      </Container>
    </footer>
  )
}

export default Footer
