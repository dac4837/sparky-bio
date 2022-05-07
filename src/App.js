import React, { useRef, useState, useEffect } from "react";
import { map } from "lodash";
import Section from "./components/section";

import {
  Intro,
  StrangerDanger,
  OtherAnimals,
  SpecialCare,
  Health,
  TricksForTreats,
  Conclusion,
} from "./section-text";
import {
  SparkyLion,
  SparkyCouch,
  SparkyLap,
  SparkySanta,
  AllImages,
} from "./media";
import ImageGallery from "react-image-gallery";

function Body() {
  const imageGalleryRef = useRef(null);
  const contactRef = useRef(null);
  const [photoClicked, setPhotoClicked] = useState(false);

  const scrollToImageGallery = () => {
    imageGalleryRef.current.scrollIntoView({ alignToTop: true });
  };

  const onPhotoClick = () => {
    setPhotoClicked(true);
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ alignToTop: true });
    console.log(contactRef.current);
  };

  useEffect(() => {
    //need to wait until a re-render/for the new image to load before scrolling
    if (photoClicked) {
      imageGalleryRef.current.scrollIntoView({ alignToTop: true });
      setPhotoClicked(false);
    }
  }, [photoClicked]);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn btn-link nav-link active"
                onClick={scrollToImageGallery}
              >
                Photos
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-link nav-link active"
                onClick={scrollToContact}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row mb-5 mt-5">
        <InfoCard />
      </div>

      <Section {...Intro} image={SparkyLion} imageDisplay="left" />
      <Section {...StrangerDanger} />
      <Section {...OtherAnimals} image={SparkyCouch} imageDisplay="right" />
      <Section {...SpecialCare} />
      <Section {...Health} image={SparkyLap} imageDisplay="left" />
      <Section {...TricksForTreats} image={SparkySanta} imageDisplay="right" />
      <Section {...Conclusion} />

      <div className="row mb-5" ref={contactRef}>
        <Contact />
      </div>

      <div className="row mb-5 pb-5" ref={imageGalleryRef}>
        <ImageGallery
          items={AllImages}
          thumbnailPosition={"top"}
          onThumbnailClick={onPhotoClick}
          onSlide={onPhotoClick}
        />
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="col">
      <h1>Contact</h1>
      <p>
        Email: <a href="mailto:dacollins3@gmail.com">dacollins3@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:207-239-6006">207-239-6006</a>
      </p>
    </div>
  );
}

function InfoCard() {
  const infoDetails = [
    [
      "Name: Sparky",
      "Age: 9yo coming 9/8/22",
      "Breed: Havanese",
      "Size: Small, 16lbs",
    ],
    [
      "Gender: Male",
      "Location: Maine",
      "Families: Not good with children",
      "Other dogs: Good with dogs he knows",
      "Cats: No",
    ],
  ];

  const infoTable = map(infoDetails, (detailColumn, ColumnIndex) => {
    const infoColumn = map(detailColumn, (detail, detailIndex) => {
      return (
        <li key={detailIndex} className="list-group-item">
          {detail}
        </li>
      );
    });

    return (
      <div key={ColumnIndex} className="col">
        <ul className="list-group list-group-flush">{infoColumn}</ul>
      </div>
    );
  });

  return (
    <div className="col">
      <h1>Info</h1>
      <div className="row">{infoTable}</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
