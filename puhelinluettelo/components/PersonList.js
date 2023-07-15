import React from 'react';

const PersonList = ({ persons, ondelete }) => {
  return (
    <ul>
      {persons.map(person => (
        <li key={person.name}>
          {person.name}&nbsp;{person.number} <button onClick={() => ondelete(person)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

export default PersonList;
