import React from 'react'
import Section from './components/section'

import {Intro, StrangerDanger, OtherAnimals, SpecialCare, Health, TricksForTreats, Conclusion} from './section-text'
import { SparkyLion, SparkyCouch, SparkyLap, SparkySanta } from './media'
import ImageGallery from 'react-image-gallery'

function Body()  {

const images = [{...SparkyLion}, {...SparkyCouch}, {...SparkyLap}, {...SparkySanta}]

  return (
    <div className="container">
      
      <Section {...Intro} image={SparkyLion} imageDisplay="left"/>
      <Section {...StrangerDanger}/>
      <Section {...OtherAnimals} image={SparkyCouch} imageDisplay="right"/>
      <Section {...SpecialCare}/>
      <Section {...Health} image={SparkyLap} imageDisplay="left"/>
      <Section {...TricksForTreats} image={SparkySanta} imageDisplay="right"/>
      <Section {...Conclusion} />

      
    <div className="row mt-9">
    <ImageGallery items={images} thumbnailPosition={'top'} />
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

