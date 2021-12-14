import { Container } from 'react-bootstrap'
import Wrapper from '../../layout/Wrapper'
import CardProduct from './components/CardProduct'

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'producto 1',
    price: '120',
  },
  {
    id: 2,
    name: 'producto 2',
    price: 240,
  },
  {
    id: 3,
    name: 'producto 3',
    price: 120,
  },
  {
    id: 4,
    name: 'producto 4',
    price: 320,
  },
]

const StorePage = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Store Page</h2>
        <div className='row'>
          {DUMMY_PRODUCTS.map((prod) => (
            <CardProduct key={prod.id} prod={prod} />
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}

export default StorePage
