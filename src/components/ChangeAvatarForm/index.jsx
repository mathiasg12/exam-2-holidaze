import { ChangeAvatarSchema } from '../../hooks/yupSchema';
import styles from './changeAvatarForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { updateProfile } from '../../js/updateProfile';
import { profileURL } from '../../js/URL';
import { useUpdateTriggerStore } from '../../states/updateTriggerState';
/**
 * component that returns the change avatar form, this component calls the updateProfile function which sends a put request  to the api
 * @param {props} props
 */
export function ChangeAvatarForm(props) {
  const { visible, setVisible } = props;
  const [closeResponseMessage, setCloseResponseMessage] = useState(true);
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const updateImage = useUpdateTriggerStore((state) => state.newUpdate);
  const handleExitClick = (e) => {
    setVisible(!visible);
    reset();
    e.preventDefault();
    setCloseResponseMessage(true);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ChangeAvatarSchema) });
  async function onSubmit(data) {
    console.log(data);
    const object = {
      avatar: {
        url: data.url,
        alt: 'avatar',
      },
    };
    await updateProfile(
      profileURL,
      setResponseMessage,
      reset,
      object,
      setError,
      setLoading,
      updateImage
    );
    setCloseResponseMessage(false);
  }
  if (!loading) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={visible ? styles.changeAvatarForm : styles.hideForm}
      >
        <button className={styles.exitForm} onClick={handleExitClick}>
          X
        </button>
        <div
          className={
            closeResponseMessage ? styles.responseHide : styles.response
          }
        >
          <p className={error ? styles.errorMessage : styles.message}>
            {responseMessage}
          </p>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="url">Add a valid URL</label>
          <p className={styles.errorP}>{errors.url?.message}</p>
          <input type="text" name="url" {...register('url')} />
        </div>
        <input type="submit" className={styles.update} value="Update"></input>
      </form>
    );
  } else {
    return <p>Loading.....</p>;
  }
}
