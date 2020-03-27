//Aside:
    //REST api's are a convention for building http services
    //these services are built by allowing users to create, read, update and delete (CRUD)
    //the corresponding http methods ar as follows: Post, Get, Put and Delete, respectively

//--------------Express Demo

//dummy values
const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
    {id: 4, name: 'course4'},
];

const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
   res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
    // res.send(req.query);
});

app.get('/api/courses/find/:id', (req, res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));

   if(!course) {
       res.status(404).send('The course with the given id was not found');
       return;
   }

   res.send(course);
});

app.post('/api/courses', (req, res) => {

    //TODO: be able to use the updated version of join instead
    // const schema = Joi.object({
    //   name: Joi.string().min(3).required(),
    // });
    // const { error, value } = schema.validate(req.body.name);

    if(!req.body.name || req.body.name.length < 3) {
        //400 Bad Request
        res.status(404).send('Name is required and more than 3 characters');
        return;
    }

   const course = {
       id: courses.length + 1,
       name: req.body.name
   }
   courses.push(course);
   res.send(courses);
});

app.put('/api/courses/put/:id', (req, res) => {
    //look up the course
    //if dne, send 404 error
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send('The course with the given id was not found');
        return;
    }

    //TODO: Validate
    // validate
    // if invalid return 400 - bad request


    //update course
    //return the updated course
    course.name = req.body.name;
    res.send(courses);

});

app.delete('/api/courses/delete/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course) {
        res.status(404).send('The course with the given id was not found');
        return;
    }

    const index = courses.indexOf(course);

    courses.splice(index, 1);

    res.send(course);
});

app.listen(3000, () => {
    const port = process.env.PORT || 3000;
    console.log(`Listening on port ${port}...`);
})

