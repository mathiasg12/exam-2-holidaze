import { useState } from 'react';
import styles from './imageCarousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
/**
 * component that creates the image carousel for the specific page, the carousel includes functionality for thr next and back arrows, uses state to controll which image should be visible and
 * display an elemnent that tells the user which image they are curently on and how many total images the carousel has.
 * @param {array} props
 */
export function ImageCarousel(props) {
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);
  const { imageArray } = props;
  function handleNextImageClick() {
    if (visibleImageIndex + 1 < imageArray.length) {
      setVisibleImageIndex(visibleImageIndex + 1);
    } else {
      setVisibleImageIndex(0);
    }
  }
  function handleBackImageClick() {
    if (visibleImageIndex - 1 < imageArray.length) {
      setVisibleImageIndex(0);
    } else {
      setVisibleImageIndex(visibleImageIndex - 1);
    }
  }
  if (imageArray && imageArray.length > 0) {
    return (
      <div className={styles.allImageCon}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          role="button"
          type="button"
          className={styles.arrowBack}
          onClick={handleBackImageClick}
        />
        {imageArray.map((image, index) => (
          <div key={index}>
            <img
              src={image.url}
              alt={image.alt}
              onError={(errorEvent) => {
                errorEvent.target.src = '../pictures/noImage.jpg';
              }}
              className={
                visibleImageIndex === index
                  ? styles.image
                  : styles.notVisibleImage
              }
            />
          </div>
        ))}
        <FontAwesomeIcon
          icon={faArrowRight}
          className={styles.arrowNext}
          role="button"
          type="button"
          onClick={handleNextImageClick}
        />
        <div className={styles.imageCount}>
          <p>
            {visibleImageIndex + 1}/{imageArray.length}
          </p>
        </div>
      </div>
    );
  } else {
    <div>
      <img
        src="../pictures/noImage.jpg"
        alt="venue"
        className={styles.image}
        onError={(errorEvent) => {
          errorEvent.target.src = '../pictures/noImage.jpg';
        }}
      ></img>
    </div>;
  }
}
