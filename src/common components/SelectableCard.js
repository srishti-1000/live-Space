import React from "react";
import LensIcon from "@mui/icons-material/Lens";
import TripOriginRoundedIcon from "@mui/icons-material/TripOriginRounded";

const SelectableCard = ({ image, name, isSelected, onSelect }) => {
  return (
    <div className={`card ${isSelected ? "selected" : ""}`} onClick={onSelect}>
      <img src={image} alt={name} className="image" />
      <span className="name">{name}</span>
      <div className="icon">
        {isSelected ? (
          <TripOriginRoundedIcon className="red-icon" />
        ) : (
          <LensIcon className="default-icon" />
        )}
      </div>
    </div>
  );
};

export default SelectableCard;
