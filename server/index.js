const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app =  express();
const mysql = require('mysql');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'encuesta_satisfaccion'

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/insert', (req, res) => {
    const {email, calificacion, check_values, comentario} = req.body;

    const sqlInsert = "INSERT INTO resultados (email, calificacion, check_values, comentario) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [email, calificacion, check_values, comentario], (err, result) => {
        console.log(result);
        if (result.affectedRows > 0) {
            res.status(200).send({
                ok: true,
                calificacion
            })
        }else {
            res.status(400).send({
                ok: false
            })
        }
    })
})



app.post('/api/getEmail', (req, res) => {

    const email = req.body.email;

    const sqlQuery = "SELECT * FROM resultados where email = (?)";
    db.query(sqlQuery, [email] ,(err, result) => {
        console.log(result)
        if (result.length > 0) {
            res.status(200).send({
                ok: true
            })
        }else {
            res.status(200).send({
                ok: false
            })
        }
    })
})

const PORT = process.env.PORT || 3001

app.listen(3001, () => {
    console.log('running on port 3001')
})