import { Table } from 'react-bootstrap'
import OrderItem from '../OrderItem'

const Overview = () => {
  return (
    <div className='mt-4'>
      <div className='card shadow bg-body rounded'>
        <div className='card-body'>
          <Table responsive>
            <thead>
              <tr>
                <th scope='col'></th>
                <th scope='col'></th>
                <th scope='col'>Item</th>
                <th scope='col'>Price</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Total</th>
              </tr>
            </thead>
            <tbody>
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Overview
