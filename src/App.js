import React, { useRef, useState, useEffect } from 'react'
import Section from './components/section'

import {Intro, StrangerDanger, OtherAnimals, SpecialCare, Health, TricksForTreats, Conclusion} from './section-text'
import { SparkyLion, SparkyCouch, SparkyLap, SparkySanta, AllImages } from './media'
import ImageGallery from 'react-image-gallery'

function Body()  {
  const imageGalleryRef = useRef(null)
  const contactRef = useRef(null)
  const [photoClicked, setPhotoClicked ] = useState(false)

  const scrollToImageGallery = () => {
    imageGalleryRef.current.scrollIntoView({alignToTop:true})
  }

  const onPhotoClick = () => {
    setPhotoClicked(true)
  }

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({alignToTop:true})
    console.log(contactRef.current)
  }

  useEffect(() => {
    //need to wait until a re-render/for the new image to load before scrolling
    if(photoClicked) {
      imageGalleryRef.current.scrollIntoView({alignToTop:true})
      setPhotoClicked(false)
    }
  },[photoClicked])


  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container-fluid'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-link nav-link active" onClick={scrollToImageGallery}>Photos</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link active" onClick={scrollToContact}>Contact</button>
            </li>
          </ul>
        </div>
      </nav>
      
      
      <Section {...Intro} image={SparkyLion} imageDisplay="left"/>
      <Section {...StrangerDanger}/>
      <Section {...OtherAnimals} image={SparkyCouch} imageDisplay="right"/>
      <Section {...SpecialCare}/>
      <Section {...Health} image={SparkyLap} imageDisplay="left"/>
      <Section {...TricksForTreats} image={SparkySanta} imageDisplay="right"/>
      <Section {...Conclusion} />

      
      <div className="row mt-9" ref={contactRef}>
        <Contact />
      </div>
      
      <div className="row mt-9" ref={imageGalleryRef}>
        <ImageGallery items={AllImages} thumbnailPosition={'top'} onThumbnailClick={onPhotoClick} onSlide={onPhotoClick} />
      </div>

    
  </div>
  )
}

function Contact() {

  return (
    <div className='col'>
      <h1>Contact</h1>
      <p>Email: <a href='mailto:dacollins3@gmail.com'>dacollins3@gmail.com</a></p>
      <p>Phone: <a href='tel:207-239-6006'>207-239-6006</a></p>
    </div>
  )
  
}

function App() {

  return (
    <div className="App">
      <Body/>
    </div>
  );
}

export default App;

