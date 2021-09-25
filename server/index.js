const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors') 


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'shoulderlean',
    database: 'crudfinal',
});

app.post("/create", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const salary = req.body.salary;

    db.query('INSERT INTO employees (name,age,country,position,salary) VALUES(?,?,?,?,?)',
    [name,age,country,position,salary],
    (err, result) => {
        if (err) {
            console.log(err)
        }
            else {
                res.send("Values have defff been inserted")
            }
        }
    );
});

app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees",
    (err, result) => {
        if (err) {
            console.log(err)
        }
            else {
                res.send(result)
            }
        });            
});

app.listen(3001, ()=> {
    console.log(" Your awesome server is running, better go catch it!")
});

