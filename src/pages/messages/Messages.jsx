import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom';

const Messages = () => {

  const currentUser = {
    id: 1,
    username: 'John Kramer',
    isSeller: true,
  };

  const message = "lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat pariatur dolor ullam! Hic ab quasi magnam quod reprehenderit non facilis placeat quisquam reiciendis? Blanditiis repudiandae incidunt at possimus iste! Officia?"

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>
            <td><button>Marked as read</button></td>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>
            <td><button>Marked as read</button></td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}</Link></td>
            <td>1 day ago</td>

          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages