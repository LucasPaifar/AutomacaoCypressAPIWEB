const express = require("express");
const router = express.Router();

const users = []; // Simulação de banco de dados

// Rota para cadastrar usuários
router.post("/", (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    // Retorna 400 para erros de validação
    return res.status(400).json({
      error: "Todos os campos (email, nome e senha) são obrigatórios!",
    });
  }

  const newUser = { id: users.length + 1, email, name, password };
  users.push(newUser);

  res.status(201).json({
    message: "Usuário cadastrado com sucesso!",
    user: newUser,
  });
});

// Rota para listar todos os usuários
router.get("/", (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ error: "Nenhum usuário encontrado." });
  }
  res.status(200).json({ users });
});

// Rota para simular um erro 500 real
router.get("/simulate-error", (req, res) => {
  try {
    // Simulando uma exceção lançada no servidor
    throw new Error("Erro interno no servidor simulado.");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
