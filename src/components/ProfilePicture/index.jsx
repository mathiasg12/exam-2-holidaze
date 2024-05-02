import { useState } from 'react';
import { ChangeAvatarForm } from '../ChangeAvatarForm';
import commonStyles from '../../styles/commonStyles/commonStyles.module.css';
import styles from './ProfilePicture.module.css';
/**
 * component that creates the jsx for the avatar picture and change avatar picture button, uses the changeAvatarForm component
 * @param {prop} props
 * @returns
 */
export function ProfilePicture(props) {
  const [updateAvatarVisible, setUpdateAvatarVisible] = useState(false);
  const handleChangeAvatarClick = () => {
    setUpdateAvatarVisible(!updateAvatarVisible);
  };
  const image = props;
  return (
    <div className={styles.imageAndBtnWrapper}>
      <div className={styles.profilePictureCon}>
        <img
          className={styles.profilePicture}
          src={image.image.url}
          alt="avatar"
          onError={(errorEvent) => {
            errorEvent.target.src = '../pictures/noImage.jpg';
          }}
        ></img>
      </div>
      <button
        className={`${commonStyles.smallButtonYellow} ${commonStyles.smallMarginBottom} `}
        onClick={handleChangeAvatarClick}
      >
        Change avatar
      </button>
      <ChangeAvatarForm
        visible={updateAvatarVisible}
        setVisible={setUpdateAvatarVisible}
      ></ChangeAvatarForm>
    </div>
  );
}
