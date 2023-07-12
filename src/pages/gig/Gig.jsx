import React from 'react'
import "./Gig.scss"
import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className='breadCrumbs'>FIVERR &gt; GRAPHICS & DESIGN</span>
          <h1> I will create ai generated art for you</h1>

          <div className="user">
            <img className='pp' src="https://placekitten.com/408/287" alt="" />
            <span>John Doe</span>
            <div className="stars">
              <img src="../img/star.png" alt="" />
              <img src="../img/star.png" alt="" />
              <img src="../img/star.png" alt="" />
              <img src="../img/star.png" alt="" />
              <img src="../img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>

          <h2>About this gig</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque a aperiam culpa ad molestiae placeat magni ratione omnis maiores, cumque non? Numquam quis repellendus eligendi recusandae asperiores temporibus voluptatum dolore?</p>

          <div className='seller'>
            <h2>About this seller</h2>
            <div className="user">
              <img className='pp' src="https://placekitten.com/408/287" alt="" />
              <div className="info">
                <span>John Doe</span>
                <div className="stars">
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>
                  Contact Me
                </button>
              </div>
            </div>

            <div className="box">
              <div className="items">
                <div className="item">
                  <span className='title'>From</span>
                  <span className='description'>USA</span>
                </div>
                <div className="item">
                  <span className='title'>Member since</span>
                  <span className='description'>Aug 2022</span>
                </div>
                <div className="item">
                  <span className='title'>Avg. response time</span>
                  <span className='description'>4 hours</span>
                </div>
                <div className="item">
                  <span className='title'>Last delivery</span>
                  <span className='description'>1 day</span>
                </div>
                <div className="item">
                  <span className='title'>Languages</span>
                  <span className='description'>English</span>
                </div>
              </div>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis officiis sit nostrum! Beatae eos, consequatur id, laboriosam rerum consequuntur voluptate unde possimus deleniti dignissimos pariatur sint totam magnam? Incidunt, sint.</p>
            </div>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div className="items">
              <div className="item">
                <div className="user">
                  <img className='pp' src="https://placekitten.com/408/287" alt="" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png" alt="" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, distinctio fugiat vitae iure sint est voluptates qui delectus iusto molestias porro excepturi! Impedit minus illo quia laborum commodi assumenda officia.</p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="../img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="../img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>

              <hr />

              <div className="item">
                <div className="user">
                  <img className='pp' src="https://placekitten.com/408/287" alt="" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="https://placekitten.com/408/287" alt="" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, distinctio fugiat vitae iure sint est voluptates qui delectus iusto molestias porro excepturi! Impedit minus illo quia laborum commodi assumenda officia.</p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="../img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="../img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>

              <hr />

              <div className="item">
                <div className="user">
                  <img className='pp' src="https://placekitten.com/408/287" alt="" />
                  <div className="info">
                    <span>John Doe</span>
                    <div className="country">
                      <img src="https://placekitten.com/408/287" alt="" />
                      <span>United States</span>
                    </div>
                  </div>
                </div>
                <div className="stars">
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <img src="../img/star.png" alt="" />
                  <span>5</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, distinctio fugiat vitae iure sint est voluptates qui delectus iusto molestias porro excepturi! Impedit minus illo quia laborum commodi assumenda officia.</p>
                <div className="helpful">
                  <span>Helpful?</span>
                  <img src="../img/like.png" alt="" />
                  <span>Yes</span>
                  <img src="../img/dislike.png" alt="" />
                  <span>No</span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated mage</h3>
            <h2>$59.99</h2>
          </div>
          <p>1 Basic Logo design Concept, JPEG and PNG (transparent background) file, No Mascot Design</p>
          <div className="details">
            <div className="item">
              <img src="../img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="../img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Span 1</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Span 1</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Span 1</span>
            </div>
            <div className="item">
              <img src="../img/greencheck.png" alt="" />
              <span>Span 1</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig