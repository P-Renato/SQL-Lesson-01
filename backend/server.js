import express from 'express';
import {sql} from './database/db.js'

const app = express();
app.use(express.json());


// route
app.post('/register', async (req,res, next) => {
    const {fullname, email, password } = req.body;

    const user = await sql `
        INSERT INTO users (fullname, email, password) 
        VALUES (${fullname}, ${email}, ${password}) 
        RETURNING fullname, email, password;
    `;

    res.json(user)

})

app.get('/users', async (req,res,next) => {
    const users = await sql `
    SELECT * FROM users;
    `;
    res.json(users);
})



app.post('/login', async (req,res,next) => {
    const {email,password} = req.body;

    try {
        const user = await sql `
        SELECT * FROM users 
            WHERE email = ${email} AND
            password = ${password}
        `;
        if(user.length == 0) {
            console.log("error");
            throw new Error('Invalid credentials');
        }
        res.json(user);
    } catch (error) {
        res.status(401).json({msg: error.message})
    }
})


const port = process.env.PORT || 5001;
app.listen(port, ()=> console.log("Server is running on port: ", port))