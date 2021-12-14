import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../../store/cart.slice'

const CardProduct = ({ prod }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const { name, price } = prod

  console.log('add to cart', cart)

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart(prod))
  }
  return (
    <div className='p-0 col-md-6 col-lg-4'>
      <div className='card m-3 shadow bg-body rounded'>
        <img
          src='https://placeimg.com/640/480/tech'
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <hr />
          <div className='d-flex align-items-center justify-content-between'>
            <div>
              <button
                className='btn btn-outline-secondary me-2'
                onClick={handleAddToCart}
              >
                Add to cart
              </button>
              <a href='/' className='btn btn-outline-success'>
                View
              </a>
            </div>
            <p className='fs-4 fw-bold m-0'>$ {price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
