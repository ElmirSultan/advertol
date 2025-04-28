import React, { useEffect, useState } from 'react'
import "./header.css"
import { FaGripLines } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = ({active,setActive}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>

<header >
        <div className='header-in'>
            <h1>A.</h1>


            <div onClick={() => setIsOpen(true)}>
                <FaGripLines className='icon' />
            </div>
        </div>

 
    </header>


<div className='overlay'
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div className="close-icon" onClick={() => setIsOpen(false)}>
          <MdClose />
        </div>
        <nav>
        <Link
            to={"/"}
            className={`${active === "" ? "active" : "link"}`}
            onClick={() => {
              setActive("")
              setIsOpen(false)
            }}
          >
            Home
          </Link>
          <Link
            to={"/services"}
            className={`${active === "services" ? "active" : "link"}`}
            onClick={() => {
              setActive("services")
              setIsOpen(false)
            }}
          >
            Services
          </Link>
          <Link
            to={"/works"}
            className={`${active === "works" ? "active" : "link"}`}
            onClick={() =>{ 
              setActive("works")
              setIsOpen(false)
            }}
          >
            Our Works
          </Link>
          <Link>Contact</Link>

          <div className="langs">
            <div className="lang-box">
              AZ
            </div>
            <div className="lang-box">
              EN
            </div>
            <div className="lang-box">
              RU
            </div>
          </div>
        </nav>
      </div>
    </>

  )
}




export default Header