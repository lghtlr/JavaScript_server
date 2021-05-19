//lesson 1**
//************************************************************************* */
//impotrs
const express = require('express');
const http = require('http');
const cors = require('cors');
const { syncHandler, asyncHandler, errorHandler } = require('./middlewares/middlewares');
const ErrorResponse = require('./classes/ErrorResponse');
//const testRouter = require('./controllers/test.controller');
const apiRouter = require('./controllers/api.controller');
const { initDB } = require('./dataBase');

//init zone
const app = express();

//initDB
initDB();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*app.use((req, res, next) => {
    //req.body.secretKey
    console.log(req.headers)
    //Получение заголовка запроса: req.header(‘secretKey’)
    if (req.headers.secretkey === 'lesson') { //(req.body?.secretkey === 'lesson') ----> if != null
        next() //передает управление следующему обработчику
    } else {
        res.status(403).json({ message: 'oops' });
    }
})*/

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

//app.post('/t', syncHandler((req, res, next) => {let k; k.length}));
app.post('/t', syncHandler((req, res, next) => {
  //  throw new Error("this is error")
    throw new ErrorResponse("This is error 400", "fefWEF")
}));

/*app.post('/test1', asyncHandler(async(req, res) => {
    //  throw new Error("this is error")
      await k();
  }));

  async function k() {
      console.log("Func K");
      throw new ErrorResponse("ERROR!!", 400)
  }*/

  

  app.use('/api/todos', apiRouter);
  //app.use('/test', testRouter);


//функция, которая готова выплюнуть ошибку

app.use(errorHandler); //функция, которая готова принять ошибку


//create server
http.createServer(app).listen(3000, () => {
    console.log('Server is working on port 3000');
});

//get - информативные данные в query параметре
//post - в теле запроса
//************************************************************************* */

