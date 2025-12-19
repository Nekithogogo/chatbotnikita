const app = require('./app'); // Импортируем app из app.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Сервер чат-бота запущен на http://localhost:${PORT}`);
});