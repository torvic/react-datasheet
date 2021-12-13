import { Container } from 'react-bootstrap'
import Wrapper from '../../layout/Wrapper'
import TotalPrice from './components/TotalPrice'
import Overview from './components/Overview'

const CartPage = () => {
  return (
    <Wrapper>
      <Container>
        <TotalPrice />
        <Overview />
      </Container>
    </Wrapper>
  )
}

export default CartPage
