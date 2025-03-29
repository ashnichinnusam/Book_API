const express = require('express');
const app = express();
const PORT = 8082;

app.use(express.json());
const books = [
    {id:'1',name:'The Great Gatsby',author:'F.Scott'},
    {id:'2',name:'The Moby Dic',author:'Herman'},
    {id:'3',name:'Mern Stack',author:'Masyntech'}
];

//Home Route 
app.get('/',(req,res)=>{
    res.json({
        status:'success',
        message:'Welcome to my first API project',
        data:"masyntech"
    })
})

//Route for fetching all books
app.get('/books',(req,res)=>{
    res.json({
        status:'success',
        message:'Books fetched succsessfully',
        data:books
    })
})

//fetch a book
app.get('/books/:id',(req,res)=>{
    const id = req.params.id;
    const bookfound = books.find((book)=>book.id===id);
    console.log(bookfound);
    if(!bookfound){
        return res.json({
            status:'Failed',
            message:'Book not found'
        });
    }
    console.log(req.params.id);
    res.json({
        
        status:'success',
        message:'Books fetched succsessfully',
        data:bookfound,

    })
})

//Create a Book
app.post('/books',(req,res)=>{
    const newpost = req.body;
    books.push(newpost);
    res.json({
        
        status:'success',
        message:'Books created succsessfully',
        data:'books',

    });
})

//start the server
app.listen(PORT,console.log(`server is running on the port ${PORT}`));