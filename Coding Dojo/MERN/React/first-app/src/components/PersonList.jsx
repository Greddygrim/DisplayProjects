import React from "react";
import PersonCard from "./PersonCard";
const PersonList = () => {
  const people = [
    { name: "John Smith", age: 33, hairColor: "brown" },
    { name: "Jane Doe", age: 29, hairColor: "blonde" },
  ];
  return (
    <div>
      {people.map((row) => (
        // eslint-disable-next-line react/jsx-key
        <PersonCard name={row.name} age={row.age} hairColor={row.hairColor} />
      ))}
    </div>
  );
};
export default PersonList;
