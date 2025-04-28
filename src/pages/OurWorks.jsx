import React, { useEffect } from 'react'
import "./home/home.css"

const OurWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="our-works" id="our-works">
    <div className="our-works-in">
      <h1>OUR WORKS</h1>
      <div className="works">
        <a href="#">MOBILINGO</a>
        <a href="#">DOCUMOOD</a>
        <a href="#">MANATRIX</a>
        <a href="#">COSHGUNUN SAYT</a>
        <a href="#">DAYIOGLU SAYT</a>
        <a href="#">BUTASCARF</a>
      </div>
    </div>
  </div>
  )
}

export default OurWorks