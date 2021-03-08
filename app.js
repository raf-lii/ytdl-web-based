const express = require('express');
const app = express();
const cors = require('cors');
var path = require('path');
const ytdl = require('ytdl-core')

const PORT = process.env.PORT || 4000;

app.use(cors());

//views enggine set
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//server
app.listen(PORT, (req, res) => {
    console.log("Server Running On Port 3000")
})

//static file for load css,js,images files on public folder
app.use(express.static(path.join(__dirname, 'public')));

//route
app.get('/', (req, res) => {
    res.render('index', { title : 'Express hi' });
});

app.get('/Download', (req, res) => {
    var URL = req.query.url;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);   
    
})

