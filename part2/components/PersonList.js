import React from 'react';

const PersonList = ({ persons }) => {
  return (
    <ul>
      {persons.map(person => (
        <li key={person.name}>
          {person.name}&nbsp;{person.number}
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
