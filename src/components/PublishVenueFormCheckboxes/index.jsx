import styles from './publishVenueFormCheckboxes.module.css';
/**
 * Component that creates the jsx for the checkboxes used in the "rent out venue" form
 * @param {props} props
 */
export function PublishVenueFormCheckboxes(props) {
  const {
    petsAllowed,
    setPetsAllowed,
    breakfastIncluded,
    setBreakfastIncuded,
    parkingIncluded,
    setParkingIncluded,
    wifiIncluded,
    setWifiIncluded,
    handleChangedMetaValue,
  } = props;
  return (
    <div className={styles.included}>
      <h4>Included</h4>
      <div>
        <input
          type="checkbox"
          name="pets"
          id="pets"
          checked={petsAllowed}
          onChange={() => handleChangedMetaValue(petsAllowed, setPetsAllowed)}
        />
        <label htmlFor="pets">Pets allowed</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="breakfast"
          id="breakfast"
          checked={breakfastIncluded}
          onChange={() =>
            handleChangedMetaValue(breakfastIncluded, setBreakfastIncuded)
          }
        />
        <label htmlFor="breakfast">Breakfast included</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="parking"
          id="parking"
          checked={parkingIncluded}
          onChange={() =>
            handleChangedMetaValue(parkingIncluded, setParkingIncluded)
          }
        />
        <label htmlFor="parking">Parking included</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="wifi"
          id="wifi"
          checked={wifiIncluded}
          onChange={() => handleChangedMetaValue(wifiIncluded, setWifiIncluded)}
        />
        <label htmlFor="wifi">Wifi included</label>
      </div>
    </div>
  );
}
