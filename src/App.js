import React, { useRef, useState, useEffect } from 'react'
import Section from './components/section'

import {Intro, StrangerDanger, OtherAnimals, SpecialCare, Health, TricksForTreats, Conclusion} from './section-text'
import { SparkyLion, SparkyCouch, SparkyLap, SparkySanta, AllImages } from './media'
import ImageGallery from 'react-image-gallery'

function Body()  {
  const imageGalleryRef = useRef(null)
  const [thumbnailClicked, setThumbnailClicked ] = useState(false)

  useEffect(() => {
    if(thumbnailClicked) {
      imageGalleryRef.current.scrollIntoView({alignToTop:true})
      setThumbnailClicked(false)
    }
  },[thumbnailClicked])


  const scrollToImageGallery = () => {
    imageGalleryRef.current.scrollIntoView({alignToTop:true})
  }

  return (
    <div className="container">
      
      <Section {...Intro} image={SparkyLion} imageDisplay="left"/>
      <Section {...StrangerDanger}/>
      <Section {...OtherAnimals} image={SparkyCouch} imageDisplay="right"/>
      <Section {...SpecialCare}/>
      <Section {...Health} image={SparkyLap} imageDisplay="left"/>
      <Section {...TricksForTreats} image={SparkySanta} imageDisplay="right"/>
      <Section {...Conclusion} />

      
    <div className="row mt-9" ref={imageGalleryRef}>
    <ImageGallery items={AllImages} thumbnailPosition={'top'} onThumbnailClick={() => {setThumbnailClicked(true)}} />
    </div>
  </div>
  )
}


function App() {

  return (
    <div className="App">
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        navv
      </nav>
      <Body/>
      </div>
    </div>
  );
}

export default App;

