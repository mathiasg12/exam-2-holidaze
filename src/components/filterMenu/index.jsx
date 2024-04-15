export function FilterMenu() {
  return (
    <div>
      <div>X</div>
      <p>Filter</p>
      <div>
        <label htmlFor="Guests" hidden>
          Guests
        </label>
        <select id="amountOfGuests" name="Guests">
          <option value="all">All</option>
          <option value=">5">Guests &gt; 5</option>
          <option value="5">Guests = 5</option>
          <option value="4">Guests = 4</option>
          <option value="3">Guests = 3</option>
          <option value="2">Guests = 2</option>
          <option value="1">Guests = 1</option>
        </select>
      </div>
      <div>
        <p>Included</p>
        <div>
          <label htmlFor="pets">Pets allowed</label>
          <input type="checkbox" name="pets" />
        </div>
        <div>
          <label htmlFor="wifi">Wifi included</label>
          <input type="checkbox" name="wifi" />
        </div>
        <div>
          <label htmlFor="breakfast">Breakfast included</label>
          <input type="checkbox" name="breakfast" />
        </div>
        <div>
          <label htmlFor="parking">Parking included</label>
          <input type="checkbox" name="parking" />
        </div>
      </div>
    </div>
  );
}
