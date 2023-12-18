import React from "react";
import { amenities } from "../constants/amenties";

function Perks({ selected, onChange }) {
  const handleClick = (ev) => {
    const { checked, name } = ev.target;

    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  };

  const PerkCard = ({ name, svg }) => (
    <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
      <input
        type="checkbox"
        checked={selected.includes( name )}
        name={name}
        onChange={handleClick}
      />
      {svg}
      <span>{name}</span>
    </label>
  );
  return (
    <>
      {amenities.map((amenity) => (
        <PerkCard name={amenity.name} svg={amenity.svg} />
      ))}
    </>
  );
}

export default Perks;
