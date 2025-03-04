import React, { useState } from "react";
import Master from "../assets/master-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function MasterHog() {
  const [eyeColor, setEyeColor] = useState("blue");

  const displayBabies = offspring.map(baby => {
    const { id, name, hobby } = baby;
    return <BabyHog key={id} name={name} hobby={hobby} eyeColor={eyeColor} />
  })

  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  return (
    <div>
      <input
        type="radio"
        name="eyeColor"
        value="blue"
        onChange={handleChangeEyeColor}
      />
      Blue<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="sun"
        onChange={handleChangeEyeColor}
      />
      Sun<br></br>
      <input
        type="radio"
        name="eyeColor"
        value="glowing"
        onChange={handleChangeEyeColor}
      />
      Glowing<br></br>
      <h2>Name: Master Blaster</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="masters-domicile">
        <img id="master-blaster" src={Master} alt="" />
      </div>
      <ul className="hoglist">
        {displayBabies}
      </ul>
    </div>
  );
}

export default MasterHog;
