import React, { useEffect, useState } from 'react';
import './Navbar.scss';
// import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

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

  return (
    <div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        {/* <Link> */}
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot ">.</span>
        </div>
        {/* </Link> */}
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a seller</span>
          <button>Join</button>
        </div>
      </div>
      {active && (
        <>
          <hr />

          <div className="menu">
            <span>Test</span>
            <span>Test 2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
