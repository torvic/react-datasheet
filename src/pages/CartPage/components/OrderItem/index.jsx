import styles from './index.module.scss'
const OrderItem = () => {
  return (
    <tr>
      <th colspan='2' className='text-center'>
        <img
          className={styles.img}
          src='/images/placeholder.jpg'
          alt='placeholder'
        />
      </th>
      <td className='align-middle'>Producto 1</td>
      <td className='align-middle'>$ 20</td>
      <td className='align-middle'>2</td>
      <td className='align-middle'>$ 40</td>
    </tr>
  )
}

export default OrderItem
