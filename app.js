const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// GET - Retorna todos os itens
app.get("/items", (req, res) => {
  res.json(items);
});

// POST - Adiciona um novo item
app.post("/items", (req, res) => {
  const { name } = req.body;
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT - Atualiza um item pelo ID
app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  item.name = name;
  res.json(item);
});

// DELETE - Remove um item pelo ID
app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
