import { useEffect, useState } from 'react';
import {
  addImage,
  imageOnChange,
  removeImage,
} from '../../js/handleImagesVenueForm';
import styles from './addAndRemoveImage.module.css';
export function AddAndRemoveImage(props) {
  const { newImageArray, setNewImageArray } = props;
  const [imageError, setImageError] = useState('');
  useEffect(() => {
    console.log(newImageArray);
  }, [newImageArray]);
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="image">Image link (optional)</label>
      <p className={styles.errorMsg}>{imageError}</p>
      <div className={styles.addImageWrapper}>
        <input
          type="text"
          name="image"
          id="imageUpdateForm"
          onKeyDown={() => {
            imageOnChange(setImageError);
          }}
        />
        <button
          onClick={(event) =>
            addImage(
              event,
              setNewImageArray,
              newImageArray,
              setImageError,
              true
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
