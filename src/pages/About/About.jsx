import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title ls-1'>About Digital Library</h2>
            <p className='fs-17'>A digital library is a collection of digital resources that can be accessed and utilized electronically. </p>
            <p className='fs-17'>This digital library project using the Google API uses a search system that allows users to find the resources they need quickly and easily. When users submit a search query, the relevant results are displayed on the screen along with the cover photos of the books.</p>
            <p className='fs-17'>When they click on the name of the book to provide more information about each book, they can access the detailed information if available on the API.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
