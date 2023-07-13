import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'


const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link className='link' to="/messages">
            MESSAGES
          </Link>
          &gt;
          John Doe
          &gt;
        </span>

        <div className="messages">
          <div className="item">
            <img className='pp' src="https://placekitten.com/408/287" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus quisquam placeat corrupti sequi eos quos magnam cupiditate sapiente saepe quibusdam illo illum nam facilis obcaecati, eum optio! Minima, animi?
            </p>
          </div>
          <div className="item owner">
            <img className='pp' src="https://placekitten.com/408/287" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus quisquam placeat corrupti sequi eos quos magnam cupiditate sapiente saepe quibusdam illo illum nam facilis obcaecati, eum optio! Minima, animi?
            </p>
          </div>
          <div className="item">
            <img className='pp' src="https://placekitten.com/408/287" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus quisquam placeat corrupti sequi eos quos magnam cupiditate sapiente saepe quibusdam illo illum nam facilis obcaecati, eum optio! Minima, animi?
            </p>
          </div>
          <div className="item owner">
            <img className='pp' src="https://placekitten.com/408/287" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus quisquam placeat corrupti sequi eos quos magnam cupiditate sapiente saepe quibusdam illo illum nam facilis obcaecati, eum optio! Minima, animi?
            </p>
          </div>
          <div className="item">
            <img className='pp' src="https://placekitten.com/408/287" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus quisquam placeat corrupti sequi eos quos magnam cupiditate sapiente saepe quibusdam illo illum nam facilis obcaecati, eum optio! Minima, animi?
            </p>
          </div>
          <div className="item owner">
            <img className='pp' src="https://placekitten.com/408/287" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ducimus quisquam placeat corrupti sequi eos quos magnam cupiditate sapiente saepe quibusdam illo illum nam facilis obcaecati, eum optio! Minima, animi?
            </p>
          </div>
        </div>

        <hr />
        
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message