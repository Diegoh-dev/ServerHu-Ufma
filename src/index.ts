import express, { Request, Response, json } from 'express';

const app = express();

const port = 8081;

app.use(express.json());


app.post('/users/auth',(req:Request,res:Response) => {
    const {prontuario,sus} = req.body;

    console.log({prontuario})
    console.log({sus})

   return res.send("ok");
})


app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port} 🚀`);
});

/*
{
    "prontuario": 16081999,
    "sus": "55555555"
}
*/