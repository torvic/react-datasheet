import { Link } from 'react-router-dom'
const TotalPrice = () => {
  return (
    <div className='p-0'>
      <div className='card shadow bg-body rounded'>
        <div className='card-body'>
          <Link to='/' className='btn btn-outline-secondary'>
            &#x2190; Continue Shopping
          </Link>
          <hr />
          <div className='d-flex align-items-center justify-content-between'>
            <p className='fs-5 m-0'>
              Items: <span className='fw-bold'>3</span>
            </p>
            <p className='fs-5 m-0'>
              Total: <span className='fw-bold'>$ 42</span>
            </p>
            <Link to='/checkout' className='btn btn-outline-success'>
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalPrice
