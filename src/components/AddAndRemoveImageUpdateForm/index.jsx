import { useState } from 'react';
import {
  addImage,
  imageOnChange,
  removeImage,
} from '../../js/handleImagesVenueForm';
import styles from './addAndRemoveImage.module.css';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
/**
 * component that returns the add and remove image link component, this allows users to eighter add or remove a image link to the image array that is sent to the API in a API call
 * @param {props} props
 */
export function AddAndRemoveImage(props) {
  const {
    newImageArray,
    setNewImageArray,
    imageInputValue,
    setImageInputValue,
  } = props;
  const [imageError, setImageError] = useState('');
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="imageUpdateForm">Image link (optional)</label>
      <p className={styles.errorMsg}>{imageError}</p>
      <div className={styles.addImageWrapper}>
        <input
          type="text"
          name="image"
          id="imageUpdateForm"
          value={imageInputValue}
          className={commonStyles.input}
          onChange={(e) => {
            imageOnChange(setImageError);
            setImageInputValue(e.target.value);
          }}
        />
        <button
          onClick={(event) =>
            addImage(
              event,
              setNewImageArray,
              newImageArray,
              setImageError,
              imageInputValue,
              setImageInputValue
            )
          }
        >
          Add
        </button>
      </div>
      <div>
        <p
          className={
            newImageArray.length >= 1
              ? styles.imageLinkInfo
              : styles.imageLinkHide
          }
        >
          images added (click the link to remove)
        </p>
        {newImageArray.map((link, index) => {
          return (
            <p
              key={link.url + index}
              role="button"
              type="button"
              id={link.url + index}
              onClick={(event) => {
                removeImage(event, newImageArray, setNewImageArray);
              }}
              className={styles.imageLink}
            >
              {link.url.substring(0, 20)}
            </p>
          );
        })}
      </div>
    </div>
  );
}
