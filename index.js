//lesson 1
//************************************************************************* */
//impotrs
const express = require('express');
const http = require('http');
const cors = require('cors');

//init zone
const app = express();
app.use(cors());

//request
app.all('/', (req, res) => {

    /* ​console.log('URL = ', req.url);
     console.log('METHOD = ', req.method);
     console.log('HOST = ', req.headers.host);
     console.log('IsSecure = ', req.secure);
      console.log('Query = ', req.query);
     console.log('Body = ', req.body);*/
    console.log('Hi!');

    res.status(200).json({ message: 'All is ok..!' });
});

app.get('/me', (req, res) => {
    res.status(200).json({ message: 'All is ok!' });
});

app.post('/testPost', (req, res) => {
    res.status(200).json({ message: 'It is POST' });
});

app.get('/testGet', (req, res) => {
    res.status(200).json({ message: 'It is GET' });
});

app.delete('/testDelete', (req, res) => {
    res.status(400).json({ message: 'Sorry, this method does not work' });
});


app.put('/testPut', (req, res) => {
    res.status(500).json({ message: 'Server error' });
});

app.patch('/testPatch', (req, res) => {
    res.status(403).json({ message: 'Your token is incorrect' });
});

//следующее задание

app.post('/addToDo', (req, res) => {
    res.status(200).json({ message: 'Add ToDo success' });
});

app.delete('/deleteToDo', (req, res) => {
    res.status(200).json({ message: 'Delete ToDo success' });
});

app.post('/updateToDo', (req, res) => {
    res.status(200).json({ message: 'Update ToDo success' });
});

/*
Добавляем метод: GET /todoList, ответ: 200, 
{ todoList: [...] }. Модель одной ToDo: 
{ _id: ‘...’, title: ‘...’, description: ‘...’ }. 
Список должен генериться методом for, 
где toDo._id = index.
*/


app.get('/todoList', (req, res) => {

    let todoList = [];

    for (let i = 0; i < 10; i++) {
        let todo = {
            id: i,
            title: "My title is " + i,
            description: `My description is ${i}`
        }
        todoList.push(todo);
    }

    res.status(200).json({ todoList });
})

//app.post('')

//create server
http.createServer(app).listen(3000, () => {
    console.log('Server is working on port 3000');
});

//get - информативные данные в query параметре
//post - в теле запроса
//************************************************************************* */

