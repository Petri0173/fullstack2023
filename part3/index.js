const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());

morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ');
});

morgan.token('requestData', (req) => {
    if (req.method === 'POST') {
      return JSON.stringify(req.body);
    }
    return '';
  });

app.use(morgan('tiny'));

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "DanAbramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
];

let personslength = persons.length;
const currentDate = new Date();

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/info', (req, res) => {
    const infoMessage = `<p>Phonebook has info for ${personslength} people</p><p>${currentDate}`;
    res.send(infoMessage);
});

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = persons.find(person => person.id === id);
    
    if (person) {
       response.json(person); 
    } else {
        response.status(404).end();
    }
});

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    persons = persons.filter(person => person.id === id);
    response.status(204).end();
});

const randomId = () => {
    let randomId = Math.floor(Math.random() * 1000) + 5;
    return randomId;
};

app.post('/api/persons', (request, response) => {
    const body= request.body;

    if (!body.name) {
        return response.status(400).json({ 
            error: 'name missing' 
        });
    }

    if (!body.number) {
        return response.status(400).json({ 
            error: 'number missing' 
            });
    }

    const nameExists = persons.some((person) => person.name === body.name);

        if (nameExists) {
            return response.status(400).json({
                error: 'name already exists'
            });
        }

    const person = {
        id: randomId(),
        name: body.name,
        number: body.number,
    };

    persons = persons.concat(person);
    response.json(person);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
