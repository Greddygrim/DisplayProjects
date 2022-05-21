import React, { useState } from "react";
const PersonCard = (props) => {
  const { name, age, hairColor } = props;

  const [stateAge, setStateAge] = useState(age);
  const addAgeClick = () => {
    setStateAge(stateAge + 1);
  };
  const minusAgeClick = () => {
    setStateAge(stateAge - 1);
  };
  const resetAgeClick = () => {
    setStateAge(props.age);
  };
  // return HTML content of the person name, age and hair color.

  return (
    <div>
      <h1 style={{ color: "red" }}>{props.name}</h1>
      <p>{stateAge}</p>
      <p>{props.hairColor}</p>
      <p>
        <button onClick={addAgeClick}>Add Age</button> &nbsp;
        <button onClick={minusAgeClick}>Minus Age</button> &nbsp;
        <button onClick={resetAgeClick}>Reset Age</button>
      </p>
    </div>
  );
};
export default PersonCard;

/* <button onClick={() => setStateAge(stateAge + 1)}>
Birthday Button for {name
</button> */
// age
// hairColor
