const express = require('express');
const app = express();

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]


const port = 5000;
app.listen(port, () => {
    console.log("serveur started on port :", port );
})

app.get('/', (req,res) => {
    res.send('Authors API')
})

// app.get('/authors', (req, res) => {
//     res.json({authors})
// })

app.get('/authors/:id', (req, res) => {
    const {id} = req.params
    res.send(`name : ${authors[id - 1].name}, nationality : ${authors[id - 1].nationality}` ,  )
})

app.get('/authors/:id/books', (req, res) => {
    const {id} = req.params
    res.send(`Books : ${authors[id - 1].books.join(', ')}`)
})

app.get('/json/authors/:id', (req, res) => {
    const {id} = req.params
    res.json({
        name : `${authors[id - 1].name}`,
        nationality : `${authors[id - 1].nationality}`
    })
})

app.get('/json/authors/:id/books', (req, res) => {
    const {id} = req.params
    res.json({
        books : `${authors[id - 1].books}`
    })
})