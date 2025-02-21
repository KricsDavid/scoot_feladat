
import React from "react";

type ScooterCardProps = {
  scooter_name: string;
  description: string;
  power_in_w: number;
  max_range: number;
  max_speed_kmh: number;
};

const ScooterCard: React.FC<ScooterCardProps> = ({
  scooter_name,
  description,
  power_in_w,
  max_range,
  max_speed_kmh,
}) => {
  return (
    <div className="scooter_card">
      <h3>{scooter_name}</h3>
      <p>{description}</p>
      <h4>Power</h4>
      <p>{power_in_w} W</p>
      <h4>Max range</h4>
      <p>{max_range} km</p>
      <h4>Max speed</h4>
      <p>{max_speed_kmh} km/h</p>
    </div>
  );
};

export default ScooterCard;
