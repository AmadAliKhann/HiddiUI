import React from 'react'

import "./Orders.scss"
const Orders = () => {

  const currentUser = {
    id: 1,
    username: "Amad Ali Khan",
    isSeller:true
  }
  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller?"Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img  className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299563402/original/eb980e3f90454a38a9b4f108ee4336ef527e4850.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299563402/original/eb980e3f90454a38a9b4f108ee4336ef527e4850.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299563402/original/eb980e3f90454a38a9b4f108ee4336ef527e4850.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299563402/original/eb980e3f90454a38a9b4f108ee4336ef527e4850.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299563402/original/eb980e3f90454a38a9b4f108ee4336ef527e4850.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img  className='img' src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/299563402/original/eb980e3f90454a38a9b4f108ee4336ef527e4850.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders;