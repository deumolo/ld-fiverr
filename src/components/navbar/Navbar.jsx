import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    if (window.scrollY > 20) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener('scroll', isActive);

    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: 'John Kramer',
    isSeller: true,
  };

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot ">.</span>
          </div>
        </Link>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser.isSeller && <span>Become a seller</span>}
          {!currentUser.isSeller && <button>Join</button>}
          {currentUser.isSeller && (
            <div
              className="user"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src="https://placekitten.com/420" alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link to="/gigs" className="link">
                        <span>Gigs</span>
                      </Link>
                      <Link to="/add" className="link">
                        <span>Add New Gig</span>
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    <span>Orders</span>
                  </Link>
                  <Link to="/messages" className="link">
                    <span>Messages</span>
                  </Link>
                  <span>Log out</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== '/') && (
        <>
          <hr />

          <div className="menu">
            <Link className="link menuLink">Graphics & Design</Link>
            <Link className="link menuLink">Video & Animation</Link>
            <Link className="link menuLink">Writing & Translation</Link>
            <Link className="link menuLink">AI Services</Link>
            <Link className="link menuLink">Digital Marketing</Link>
            <Link className="link menuLink">Music & Audio</Link>
            <Link className="link menuLink">Programming & Tech</Link>
            <Link className="link menuLink">Business</Link>
            <Link className="link menuLink">Lifestyle</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
