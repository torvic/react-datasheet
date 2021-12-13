import { Container } from 'react-bootstrap'
import Wrapper from '../../layout/Wrapper'
import CardProduct from './components/CardProduct'
import { useSelector } from 'react-redux'

const StorePage = () => {
  const products = useSelector((state) => state.cart.products)
  return (
    <Wrapper>
      <Container>
        <h2>Store Page</h2>
        <div className='row'>
          {products &&
            products.map((prod) => <CardProduct key={prod.id} prod={prod} />)}
        </div>
      </Container>
    </Wrapper>
  )
}

export default StorePage
