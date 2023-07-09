import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

const courses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
        },
        {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
        },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
        }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
        {
            name: 'Routing',
            exercises: 3,
            id: 1
        },
        {
            name: 'Middlewares',
            exercises: 7,
            id: 2
        }
        ]
    }
];

ReactDOM.render(<App courses={courses} />, document.getElementById('root'));
