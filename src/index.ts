import express, { Request, Response, json } from "express";

import jwt = require("jsonwebtoken");
const app = express();

const port = 8081;

app.use(express.json());

const secretKey = "hausdwbajdw54523gyean";

const listaUsuarios = [];

app.post("/users/create", (req: Request, res: Response) => {
  const { prontuario, sus } = req.body;

  if (prontuario === "") {
    return res.status(400).send("prontuário não informado");
  }

  if (sus === "") {
    return res.status(400).send(" Número do sus não informado");
  }

  if (prontuario !== "" && sus !== "") {
    listaUsuarios.push({ prontuario, sus });
    return res.send("Usuário gravado com sucesso");
  }
});

app.post("/users/auth", (req: Request, res: Response) => {
  const { prontuario, sus } = req.body;

  const payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: {
      prontuario,
      sus,
    },
  };

  jwt.sign(payload, secretKey, (err, token) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    console.log({
      token,
    });
    return res.json({ token });
  });

  // const nossoToken = jwt.sign(
  //   {
  //     email: 'nome@alura.com.br',
  //     password: 'HuEKW489!j445*',
  //   },
  //   secretKey,
  //   {
  //     expiresIn: '1y',
  //     subject: '1',
  //   }
  // );

  console.log({ prontuario });
  console.log({ sus });

  //  return res.send("ok");
});

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
