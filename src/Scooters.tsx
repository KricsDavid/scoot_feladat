
import React, { useState, useEffect } from "react";
import ScooterCard from "./components/ScooterCard";

function Scooters () {
  const [scooters, setScooters] = useState<any[]>([]);

  useEffect(() => {
    fetch("scooters.json")
      .then((response) => response.json())
      .then((data) => setScooters(data)
      );
  }, []);

  return (
    <div id="available-scooters">
      {scooters.map((scooter) => (
        <ScooterCard
          key={scooter.id}
          scooter_name={scooter.scooter_name}
          description={scooter.description}
          power_in_w={scooter.power_in_w}
          max_range={scooter.max_range}
          max_speed_kmh={scooter.max_speed_kmh}
        />
      ))}
    </div>
  );
};

export default Scooters;
