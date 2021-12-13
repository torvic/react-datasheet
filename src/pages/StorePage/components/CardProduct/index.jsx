const CardProduct = ({ prod }) => {
	const { name, price } = prod
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
              <a href='/' className='btn btn-outline-secondary me-2'>
                Add to cart
              </a>
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
