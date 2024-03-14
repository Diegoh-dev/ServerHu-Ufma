import express, { Request, Response, json } from 'express';
import jwt  = require('jsonwebtoken');


const app = express();

const port = 8081;

app.use(express.json());

const secretKey = "hausdwbajdw54523gyean";

app.post('/users/auth',(req:Request,res:Response) => {
    const {prontuario,sus} = req.body;

    const payload = {
      prontuario,
      sus,
    };

    jwt.sign(payload, secretKey, (err, token) => {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }
      console.log({
        token
      })
      return res.json({ token });
    });

    console.log({prontuario})
    console.log({sus})

   return res.send("ok");
})

//http://localhost:8081/users/auth

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port} 🚀`);
});

/*
{
    "prontuario": 16081999,
    "sus": "55555555"
}
*/