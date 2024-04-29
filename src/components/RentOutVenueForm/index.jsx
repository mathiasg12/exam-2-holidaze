import styles from './rentOutVenueForm.module.css';
export function RentOutVenueForm() {
  return (
    <div>
      <h3>Rent out a Venue</h3>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input type="textarea" name="desc" id="desc" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" id="price" />
        </div>
        <div>
          <label htmlFor="adress">adress</label>
          <input type="text" name="adress" id="adress" />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" />
        </div>
        <div>
          <label htmlFor="maxGuestsAllowed">Max Guests</label>
          <input type="text" name="maxGuestsAllowed" id="maxGuestsAllowed" />
        </div>
        <div>
          <div>
            <label htmlFor="pets">Pets allowed</label>
            <input type="checkbox" name="pets" id="pets" />
          </div>
          <div>
            <label htmlFor="breakfast">Breakfast included</label>
            <input type="checkbox" name="breakfast" id="breakfast" />
          </div>
          <div>
            <label htmlFor="parking">Parking included</label>
            <input type="checkbox" name="parking" id="parking" />
          </div>
          <div>
            <label htmlFor="wifi">Wifi included</label>
            <input type="checkbox" name="wifi" id="wifi" />
          </div>
        </div>
        <div>
          <input type="submit" value="Publish" />
        </div>
      </form>
    </div>
  );
}
